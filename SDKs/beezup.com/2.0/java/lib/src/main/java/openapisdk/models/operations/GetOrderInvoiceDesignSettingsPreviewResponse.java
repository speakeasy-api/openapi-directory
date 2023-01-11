package openapisdk.models.operations;



public class GetOrderInvoiceDesignSettingsPreviewResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetOrderInvoiceDesignSettingsPreviewResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetOrderInvoiceDesignSettingsPreviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrderInvoiceDesignSettingsPreviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public GetOrderInvoiceDesignSettingsPreviewResponse withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
    public openapisdk.models.shared.GetOrderInvoiceDesignPreviewResponse getOrderInvoiceDesignPreviewResponse;
    public GetOrderInvoiceDesignSettingsPreviewResponse withGetOrderInvoiceDesignPreviewResponse(openapisdk.models.shared.GetOrderInvoiceDesignPreviewResponse getOrderInvoiceDesignPreviewResponse) {
        this.getOrderInvoiceDesignPreviewResponse = getOrderInvoiceDesignPreviewResponse;
        return this;
    }
}