package openapisdk.models.operations;



public class GetShippingQuoteResponse {
    public String contentType;
    public GetShippingQuoteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShippingQuote shippingQuote;
    public GetShippingQuoteResponse withShippingQuote(openapisdk.models.shared.ShippingQuote shippingQuote) {
        this.shippingQuote = shippingQuote;
        return this;
    }
    public Long statusCode;
    public GetShippingQuoteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}