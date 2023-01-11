package openapisdk.models.operations;



public class PostCheckAccountHolderResponse {
    public String contentType;
    public PostCheckAccountHolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object genericResponse;
    public PostCheckAccountHolderResponse withGenericResponse(Object genericResponse) {
        this.genericResponse = genericResponse;
        return this;
    }
    public Object serviceError;
    public PostCheckAccountHolderResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostCheckAccountHolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}