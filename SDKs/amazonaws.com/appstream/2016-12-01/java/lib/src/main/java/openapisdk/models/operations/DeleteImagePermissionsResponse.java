package openapisdk.models.operations;



public class DeleteImagePermissionsResponse {
    public String contentType;
    public DeleteImagePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteImagePermissionsResult;
    public DeleteImagePermissionsResponse withDeleteImagePermissionsResult(java.util.Map<String, Object> deleteImagePermissionsResult) {
        this.deleteImagePermissionsResult = deleteImagePermissionsResult;
        return this;
    }
    public Object resourceNotAvailableException;
    public DeleteImagePermissionsResponse withResourceNotAvailableException(Object resourceNotAvailableException) {
        this.resourceNotAvailableException = resourceNotAvailableException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteImagePermissionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteImagePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}