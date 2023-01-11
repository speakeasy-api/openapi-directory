package openapisdk.models.operations;



public class GetMarketplaceAccountsSynchronizationV3Response {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetMarketplaceAccountsSynchronizationV3Response withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetMarketplaceAccountsSynchronizationV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMarketplaceAccountsSynchronizationV3Response withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetMarketplaceAccountsSynchronizationV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountSynchronizationList accountSynchronizationList;
    public GetMarketplaceAccountsSynchronizationV3Response withAccountSynchronizationList(openapisdk.models.shared.AccountSynchronizationList accountSynchronizationList) {
        this.accountSynchronizationList = accountSynchronizationList;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public GetMarketplaceAccountsSynchronizationV3Response withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
}