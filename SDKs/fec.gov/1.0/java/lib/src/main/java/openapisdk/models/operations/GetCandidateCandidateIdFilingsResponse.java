package openapisdk.models.operations;



public class GetCandidateCandidateIdFilingsResponse {
    public String contentType;
    public GetCandidateCandidateIdFilingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FilingsPage filingsPage;
    public GetCandidateCandidateIdFilingsResponse withFilingsPage(openapisdk.models.shared.FilingsPage filingsPage) {
        this.filingsPage = filingsPage;
        return this;
    }
    public Long statusCode;
    public GetCandidateCandidateIdFilingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}