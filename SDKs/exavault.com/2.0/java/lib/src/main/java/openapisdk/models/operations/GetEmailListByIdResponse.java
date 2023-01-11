package openapisdk.models.operations;



public class GetEmailListByIdResponse {
    public String contentType;
    public GetEmailListByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmailListResponse emailListResponse;
    public GetEmailListByIdResponse withEmailListResponse(openapisdk.models.shared.EmailListResponse emailListResponse) {
        this.emailListResponse = emailListResponse;
        return this;
    }
    public Long statusCode;
    public GetEmailListByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}