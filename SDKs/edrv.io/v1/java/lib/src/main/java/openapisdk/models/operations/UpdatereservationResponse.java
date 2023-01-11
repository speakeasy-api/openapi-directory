package openapisdk.models.operations;



public class UpdatereservationResponse {
    public String contentType;
    public UpdatereservationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdatereservationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Updatereservation201ApplicationJson updatereservation201ApplicationJSONObject;
    public UpdatereservationResponse withUpdatereservation201ApplicationJsonObject(Updatereservation201ApplicationJson updatereservation201ApplicationJSONObject) {
        this.updatereservation201ApplicationJSONObject = updatereservation201ApplicationJSONObject;
        return this;
    }
}