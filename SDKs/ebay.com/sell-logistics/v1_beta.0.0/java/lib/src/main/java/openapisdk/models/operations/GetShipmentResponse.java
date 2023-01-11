package openapisdk.models.operations;



public class GetShipmentResponse {
    public String contentType;
    public GetShipmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Shipment shipment;
    public GetShipmentResponse withShipment(openapisdk.models.shared.Shipment shipment) {
        this.shipment = shipment;
        return this;
    }
    public Long statusCode;
    public GetShipmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}