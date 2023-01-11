package openapisdk.models.operations;



public class IssueRefundResponse {
    public String contentType;
    public IssueRefundResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Refund refund;
    public IssueRefundResponse withRefund(openapisdk.models.shared.Refund refund) {
        this.refund = refund;
        return this;
    }
    public Long statusCode;
    public IssueRefundResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}