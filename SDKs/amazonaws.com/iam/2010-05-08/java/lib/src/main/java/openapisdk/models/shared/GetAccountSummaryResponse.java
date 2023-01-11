package openapisdk.models.shared;



/**
 * GetAccountSummaryResponse
 * Contains the response to a successful <a>GetAccountSummary</a> request. 
**/
public class GetAccountSummaryResponse {
    public java.util.Map<String, Long> summaryMap;
    public GetAccountSummaryResponse withSummaryMap(java.util.Map<String, Long> summaryMap) {
        this.summaryMap = summaryMap;
        return this;
    }
}