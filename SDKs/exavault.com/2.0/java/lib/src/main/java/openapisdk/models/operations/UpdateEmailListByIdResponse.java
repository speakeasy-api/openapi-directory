package openapisdk.models.operations;



public class UpdateEmailListByIdResponse {
    public String contentType;
    public UpdateEmailListByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmailListResponse emailListResponse;
    public UpdateEmailListByIdResponse withEmailListResponse(openapisdk.models.shared.EmailListResponse emailListResponse) {
        this.emailListResponse = emailListResponse;
        return this;
    }
    public Long statusCode;
    public UpdateEmailListByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}