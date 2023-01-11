package openapisdk.models.operations;



public class PostCloseAccountResponse {
    public Object closeAccountResponse;
    public PostCloseAccountResponse withCloseAccountResponse(Object closeAccountResponse) {
        this.closeAccountResponse = closeAccountResponse;
        return this;
    }
    public String contentType;
    public PostCloseAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceError;
    public PostCloseAccountResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostCloseAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}