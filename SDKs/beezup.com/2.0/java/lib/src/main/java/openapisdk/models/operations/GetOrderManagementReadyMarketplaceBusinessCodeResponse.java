package openapisdk.models.operations;



public class GetOrderManagementReadyMarketplaceBusinessCodeResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetOrderManagementReadyMarketplaceBusinessCodeResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetOrderManagementReadyMarketplaceBusinessCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrderManagementReadyMarketplaceBusinessCodeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrderManagementReadyMarketplaceBusinessCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public GetOrderManagementReadyMarketplaceBusinessCodeResponse withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
    public openapisdk.models.shared.ListOfValueItem[] oMReadyMarketplaceBusinessCodeResponse;
    public GetOrderManagementReadyMarketplaceBusinessCodeResponse withOMReadyMarketplaceBusinessCodeResponse(openapisdk.models.shared.ListOfValueItem[] oMReadyMarketplaceBusinessCodeResponse) {
        this.oMReadyMarketplaceBusinessCodeResponse = oMReadyMarketplaceBusinessCodeResponse;
        return this;
    }
}