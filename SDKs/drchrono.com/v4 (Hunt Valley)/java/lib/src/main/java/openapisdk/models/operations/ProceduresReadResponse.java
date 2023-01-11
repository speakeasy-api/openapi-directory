package openapisdk.models.operations;



public class ProceduresReadResponse {
    public openapisdk.models.shared.BillingLineItem billingLineItem;
    public ProceduresReadResponse withBillingLineItem(openapisdk.models.shared.BillingLineItem billingLineItem) {
        this.billingLineItem = billingLineItem;
        return this;
    }
    public String contentType;
    public ProceduresReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProceduresReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}