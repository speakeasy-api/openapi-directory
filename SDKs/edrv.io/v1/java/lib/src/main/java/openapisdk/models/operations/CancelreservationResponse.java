package openapisdk.models.operations;



public class CancelreservationResponse {
    public String contentType;
    public CancelreservationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CancelreservationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Cancelreservation201ApplicationJson cancelreservation201ApplicationJSONObject;
    public CancelreservationResponse withCancelreservation201ApplicationJsonObject(Cancelreservation201ApplicationJson cancelreservation201ApplicationJSONObject) {
        this.cancelreservation201ApplicationJSONObject = cancelreservation201ApplicationJSONObject;
        return this;
    }
}