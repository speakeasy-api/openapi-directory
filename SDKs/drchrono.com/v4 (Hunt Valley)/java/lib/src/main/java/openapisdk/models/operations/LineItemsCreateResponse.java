package openapisdk.models.operations;



public class LineItemsCreateResponse {
    public openapisdk.models.shared.BillingLineItem billingLineItem;
    public LineItemsCreateResponse withBillingLineItem(openapisdk.models.shared.BillingLineItem billingLineItem) {
        this.billingLineItem = billingLineItem;
        return this;
    }
    public String contentType;
    public LineItemsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LineItemsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}