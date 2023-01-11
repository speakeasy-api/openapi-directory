package openapisdk.models.operations;



public class RacerResponse {
    public String contentType;
    public RacerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RacerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Racer400ApplicationJson racer400ApplicationJSONObject;
    public RacerResponse withRacer400ApplicationJsonObject(Racer400ApplicationJson racer400ApplicationJSONObject) {
        this.racer400ApplicationJSONObject = racer400ApplicationJSONObject;
        return this;
    }
    public Racer401ApplicationJson racer401ApplicationJSONObject;
    public RacerResponse withRacer401ApplicationJsonObject(Racer401ApplicationJson racer401ApplicationJSONObject) {
        this.racer401ApplicationJSONObject = racer401ApplicationJSONObject;
        return this;
    }
    public Racer404ApplicationJson racer404ApplicationJSONObject;
    public RacerResponse withRacer404ApplicationJsonObject(Racer404ApplicationJson racer404ApplicationJSONObject) {
        this.racer404ApplicationJSONObject = racer404ApplicationJSONObject;
        return this;
    }
    public Racer500ApplicationJson racer500ApplicationJSONObject;
    public RacerResponse withRacer500ApplicationJsonObject(Racer500ApplicationJson racer500ApplicationJSONObject) {
        this.racer500ApplicationJSONObject = racer500ApplicationJSONObject;
        return this;
    }
    public Racer502ApplicationJson racer502ApplicationJSONObject;
    public RacerResponse withRacer502ApplicationJsonObject(Racer502ApplicationJson racer502ApplicationJSONObject) {
        this.racer502ApplicationJSONObject = racer502ApplicationJSONObject;
        return this;
    }
    public Racer503ApplicationJson racer503ApplicationJSONObject;
    public RacerResponse withRacer503ApplicationJsonObject(Racer503ApplicationJson racer503ApplicationJSONObject) {
        this.racer503ApplicationJSONObject = racer503ApplicationJSONObject;
        return this;
    }
    public Racer504ApplicationJson racer504ApplicationJSONObject;
    public RacerResponse withRacer504ApplicationJsonObject(Racer504ApplicationJson racer504ApplicationJSONObject) {
        this.racer504ApplicationJSONObject = racer504ApplicationJSONObject;
        return this;
    }
}