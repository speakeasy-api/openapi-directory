package openapisdk.models.operations;



public class GetPaymentDisputeSummariesRequest {
    public String serverURL;
    public GetPaymentDisputeSummariesRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public GetPaymentDisputeSummariesQueryParams queryParams;
    public GetPaymentDisputeSummariesRequest withQueryParams(GetPaymentDisputeSummariesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPaymentDisputeSummariesSecurity security;
    public GetPaymentDisputeSummariesRequest withSecurity(GetPaymentDisputeSummariesSecurity security) {
        this.security = security;
        return this;
    }
}