package openapisdk.models.operations;



public class GetOrderInvoicePdfResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetOrderInvoicePdfResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetOrderInvoicePdfResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public byte[] getOrderInvoicePdf200ApplicationPdfBinaryString;
    public GetOrderInvoicePdfResponse withGetOrderInvoicePdf200ApplicationPdfBinaryString(byte[] getOrderInvoicePdf200ApplicationPdfBinaryString) {
        this.getOrderInvoicePdf200ApplicationPdfBinaryString = getOrderInvoicePdf200ApplicationPdfBinaryString;
        return this;
    }
    public Long statusCode;
    public GetOrderInvoicePdfResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public GetOrderInvoicePdfResponse withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
}