package openapisdk.models.operations;



public class GetCommitteeCommitteeIdHistoryResponse {
    public openapisdk.models.shared.CommitteeHistoryPage committeeHistoryPage;
    public GetCommitteeCommitteeIdHistoryResponse withCommitteeHistoryPage(openapisdk.models.shared.CommitteeHistoryPage committeeHistoryPage) {
        this.committeeHistoryPage = committeeHistoryPage;
        return this;
    }
    public String contentType;
    public GetCommitteeCommitteeIdHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommitteeCommitteeIdHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}