package openapisdk.models.operations;



public class GetCommitteeCommitteeIdHistoryCycleResponse {
    public openapisdk.models.shared.CommitteeHistoryPage committeeHistoryPage;
    public GetCommitteeCommitteeIdHistoryCycleResponse withCommitteeHistoryPage(openapisdk.models.shared.CommitteeHistoryPage committeeHistoryPage) {
        this.committeeHistoryPage = committeeHistoryPage;
        return this;
    }
    public String contentType;
    public GetCommitteeCommitteeIdHistoryCycleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommitteeCommitteeIdHistoryCycleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}