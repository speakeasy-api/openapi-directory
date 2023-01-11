package openapisdk.models.operations;



public class AddEmailListResponse {
    public String contentType;
    public AddEmailListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmailListResponse emailListResponse;
    public AddEmailListResponse withEmailListResponse(openapisdk.models.shared.EmailListResponse emailListResponse) {
        this.emailListResponse = emailListResponse;
        return this;
    }
    public Long statusCode;
    public AddEmailListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}