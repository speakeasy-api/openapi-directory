package openapisdk.models.operations;



public class GetOrderInvoiceDesignSettingsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetOrderInvoiceDesignSettingsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetOrderInvoiceDesignSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrderInvoiceDesignSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public GetOrderInvoiceDesignSettingsResponse withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
    public openapisdk.models.shared.OrderInvoiceDesignSettings orderInvoiceDesignSettings;
    public GetOrderInvoiceDesignSettingsResponse withOrderInvoiceDesignSettings(openapisdk.models.shared.OrderInvoiceDesignSettings orderInvoiceDesignSettings) {
        this.orderInvoiceDesignSettings = orderInvoiceDesignSettings;
        return this;
    }
}