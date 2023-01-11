package openapisdk.models.operations;



public class CreateShippingQuoteResponse {
    public String contentType;
    public CreateShippingQuoteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShippingQuote shippingQuote;
    public CreateShippingQuoteResponse withShippingQuote(openapisdk.models.shared.ShippingQuote shippingQuote) {
        this.shippingQuote = shippingQuote;
        return this;
    }
    public Long statusCode;
    public CreateShippingQuoteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}