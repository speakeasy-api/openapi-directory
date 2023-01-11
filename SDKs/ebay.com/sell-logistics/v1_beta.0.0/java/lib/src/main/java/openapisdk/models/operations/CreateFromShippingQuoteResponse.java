package openapisdk.models.operations;



public class CreateFromShippingQuoteResponse {
    public String contentType;
    public CreateFromShippingQuoteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Shipment shipment;
    public CreateFromShippingQuoteResponse withShipment(openapisdk.models.shared.Shipment shipment) {
        this.shipment = shipment;
        return this;
    }
    public Long statusCode;
    public CreateFromShippingQuoteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}