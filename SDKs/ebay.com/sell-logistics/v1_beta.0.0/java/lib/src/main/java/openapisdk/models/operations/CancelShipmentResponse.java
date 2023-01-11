package openapisdk.models.operations;



public class CancelShipmentResponse {
    public String contentType;
    public CancelShipmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Shipment shipment;
    public CancelShipmentResponse withShipment(openapisdk.models.shared.Shipment shipment) {
        this.shipment = shipment;
        return this;
    }
    public Long statusCode;
    public CancelShipmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}