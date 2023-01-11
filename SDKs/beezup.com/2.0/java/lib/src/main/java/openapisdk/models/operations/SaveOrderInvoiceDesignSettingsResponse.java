package openapisdk.models.operations;



public class SaveOrderInvoiceDesignSettingsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public SaveOrderInvoiceDesignSettingsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public SaveOrderInvoiceDesignSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SaveOrderInvoiceDesignSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public SaveOrderInvoiceDesignSettingsResponse withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
}