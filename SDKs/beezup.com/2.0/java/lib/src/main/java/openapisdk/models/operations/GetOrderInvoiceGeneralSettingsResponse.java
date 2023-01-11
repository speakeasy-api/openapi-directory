package openapisdk.models.operations;



public class GetOrderInvoiceGeneralSettingsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetOrderInvoiceGeneralSettingsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetOrderInvoiceGeneralSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrderInvoiceGeneralSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public GetOrderInvoiceGeneralSettingsResponse withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
    public openapisdk.models.shared.GetOrderInvoiceGeneralSettingsResponse getOrderInvoiceGeneralSettingsResponse;
    public GetOrderInvoiceGeneralSettingsResponse withGetOrderInvoiceGeneralSettingsResponse(openapisdk.models.shared.GetOrderInvoiceGeneralSettingsResponse getOrderInvoiceGeneralSettingsResponse) {
        this.getOrderInvoiceGeneralSettingsResponse = getOrderInvoiceGeneralSettingsResponse;
        return this;
    }
}