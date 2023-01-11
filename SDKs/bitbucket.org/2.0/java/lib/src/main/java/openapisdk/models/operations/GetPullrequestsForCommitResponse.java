package openapisdk.models.operations;



public class GetPullrequestsForCommitResponse {
    public String contentType;
    public GetPullrequestsForCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPullrequestsForCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetPullrequestsForCommitResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedPullrequests paginatedPullrequests;
    public GetPullrequestsForCommitResponse withPaginatedPullrequests(openapisdk.models.shared.PaginatedPullrequests paginatedPullrequests) {
        this.paginatedPullrequests = paginatedPullrequests;
        return this;
    }
}