package openapisdk.models.operations;



public class GetMarketplaceAccountsSynchronizationResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetMarketplaceAccountsSynchronizationResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetMarketplaceAccountsSynchronizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMarketplaceAccountsSynchronizationResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetMarketplaceAccountsSynchronizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountSynchronizationList accountSynchronizationList;
    public GetMarketplaceAccountsSynchronizationResponse withAccountSynchronizationList(openapisdk.models.shared.AccountSynchronizationList accountSynchronizationList) {
        this.accountSynchronizationList = accountSynchronizationList;
        return this;
    }
}