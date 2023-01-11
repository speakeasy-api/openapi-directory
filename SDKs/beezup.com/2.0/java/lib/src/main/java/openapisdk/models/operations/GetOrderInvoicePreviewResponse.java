package openapisdk.models.operations;



public class GetOrderInvoicePreviewResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetOrderInvoicePreviewResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetOrderInvoicePreviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrderInvoicePreviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public GetOrderInvoicePreviewResponse withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
    public openapisdk.models.shared.PreviewOrderInvoiceResponse previewOrderInvoiceResponse;
    public GetOrderInvoicePreviewResponse withPreviewOrderInvoiceResponse(openapisdk.models.shared.PreviewOrderInvoiceResponse previewOrderInvoiceResponse) {
        this.previewOrderInvoiceResponse = previewOrderInvoiceResponse;
        return this;
    }
}