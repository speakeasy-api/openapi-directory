package openapisdk.models.operations;



public class LineItemsReadResponse {
    public openapisdk.models.shared.BillingLineItem billingLineItem;
    public LineItemsReadResponse withBillingLineItem(openapisdk.models.shared.BillingLineItem billingLineItem) {
        this.billingLineItem = billingLineItem;
        return this;
    }
    public String contentType;
    public LineItemsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LineItemsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}