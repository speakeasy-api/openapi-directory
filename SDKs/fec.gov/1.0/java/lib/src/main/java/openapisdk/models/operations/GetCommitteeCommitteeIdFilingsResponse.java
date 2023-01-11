package openapisdk.models.operations;



public class GetCommitteeCommitteeIdFilingsResponse {
    public String contentType;
    public GetCommitteeCommitteeIdFilingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FilingsPage filingsPage;
    public GetCommitteeCommitteeIdFilingsResponse withFilingsPage(openapisdk.models.shared.FilingsPage filingsPage) {
        this.filingsPage = filingsPage;
        return this;
    }
    public Long statusCode;
    public GetCommitteeCommitteeIdFilingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}