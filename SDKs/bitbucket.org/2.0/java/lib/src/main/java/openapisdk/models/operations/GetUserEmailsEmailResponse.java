package openapisdk.models.operations;



public class GetUserEmailsEmailResponse {
    public String contentType;
    public GetUserEmailsEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserEmailsEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetUserEmailsEmailResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}