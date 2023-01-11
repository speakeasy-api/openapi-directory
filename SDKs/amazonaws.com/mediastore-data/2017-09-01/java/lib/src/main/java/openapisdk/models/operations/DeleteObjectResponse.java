package openapisdk.models.operations;



public class DeleteObjectResponse {
    public Object containerNotFoundException;
    public DeleteObjectResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public DeleteObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteObjectResponse;
    public DeleteObjectResponse withDeleteObjectResponse(java.util.Map<String, Object> deleteObjectResponse) {
        this.deleteObjectResponse = deleteObjectResponse;
        return this;
    }
    public Object internalServerError;
    public DeleteObjectResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object objectNotFoundException;
    public DeleteObjectResponse withObjectNotFoundException(Object objectNotFoundException) {
        this.objectNotFoundException = objectNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}