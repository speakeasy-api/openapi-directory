package openapisdk.models.operations;



public class GetCommitteeCommitteeIdResponse {
    public openapisdk.models.shared.CommitteeDetailPage committeeDetailPage;
    public GetCommitteeCommitteeIdResponse withCommitteeDetailPage(openapisdk.models.shared.CommitteeDetailPage committeeDetailPage) {
        this.committeeDetailPage = committeeDetailPage;
        return this;
    }
    public String contentType;
    public GetCommitteeCommitteeIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommitteeCommitteeIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}