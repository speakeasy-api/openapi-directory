package openapisdk.models.operations;



public class PostDeletePayoutMethodsResponse {
    public String contentType;
    public PostDeletePayoutMethodsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object genericResponse;
    public PostDeletePayoutMethodsResponse withGenericResponse(Object genericResponse) {
        this.genericResponse = genericResponse;
        return this;
    }
    public Object serviceError;
    public PostDeletePayoutMethodsResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostDeletePayoutMethodsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}