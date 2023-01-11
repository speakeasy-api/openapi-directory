package openapisdk.models.operations;



public class GetTotalsByEntityResponse {
    public String contentType;
    public GetTotalsByEntityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityReceiptDisbursementTotalsPage entityReceiptDisbursementTotalsPage;
    public GetTotalsByEntityResponse withEntityReceiptDisbursementTotalsPage(openapisdk.models.shared.EntityReceiptDisbursementTotalsPage entityReceiptDisbursementTotalsPage) {
        this.entityReceiptDisbursementTotalsPage = entityReceiptDisbursementTotalsPage;
        return this;
    }
    public Long statusCode;
    public GetTotalsByEntityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}