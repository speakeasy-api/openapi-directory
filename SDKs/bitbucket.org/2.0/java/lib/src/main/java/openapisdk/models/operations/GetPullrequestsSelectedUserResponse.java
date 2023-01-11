package openapisdk.models.operations;



public class GetPullrequestsSelectedUserResponse {
    public String contentType;
    public GetPullrequestsSelectedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPullrequestsSelectedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetPullrequestsSelectedUserResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedPullrequests paginatedPullrequests;
    public GetPullrequestsSelectedUserResponse withPaginatedPullrequests(openapisdk.models.shared.PaginatedPullrequests paginatedPullrequests) {
        this.paginatedPullrequests = paginatedPullrequests;
        return this;
    }
}