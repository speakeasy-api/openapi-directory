package openapisdk.models.operations;



public class PutObjectResponse {
    public Object containerNotFoundException;
    public PutObjectResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public PutObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public PutObjectResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public openapisdk.models.shared.PutObjectResponse putObjectResponse;
    public PutObjectResponse withPutObjectResponse(openapisdk.models.shared.PutObjectResponse putObjectResponse) {
        this.putObjectResponse = putObjectResponse;
        return this;
    }
    public Long statusCode;
    public PutObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}