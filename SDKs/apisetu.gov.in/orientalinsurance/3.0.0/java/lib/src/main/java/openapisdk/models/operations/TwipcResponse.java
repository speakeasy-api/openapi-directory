package openapisdk.models.operations;



public class TwipcResponse {
    public String contentType;
    public TwipcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TwipcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Twipc400ApplicationJson twipc400ApplicationJSONObject;
    public TwipcResponse withTwipc400ApplicationJsonObject(Twipc400ApplicationJson twipc400ApplicationJSONObject) {
        this.twipc400ApplicationJSONObject = twipc400ApplicationJSONObject;
        return this;
    }
    public Twipc401ApplicationJson twipc401ApplicationJSONObject;
    public TwipcResponse withTwipc401ApplicationJsonObject(Twipc401ApplicationJson twipc401ApplicationJSONObject) {
        this.twipc401ApplicationJSONObject = twipc401ApplicationJSONObject;
        return this;
    }
    public Twipc404ApplicationJson twipc404ApplicationJSONObject;
    public TwipcResponse withTwipc404ApplicationJsonObject(Twipc404ApplicationJson twipc404ApplicationJSONObject) {
        this.twipc404ApplicationJSONObject = twipc404ApplicationJSONObject;
        return this;
    }
    public Twipc500ApplicationJson twipc500ApplicationJSONObject;
    public TwipcResponse withTwipc500ApplicationJsonObject(Twipc500ApplicationJson twipc500ApplicationJSONObject) {
        this.twipc500ApplicationJSONObject = twipc500ApplicationJSONObject;
        return this;
    }
    public Twipc502ApplicationJson twipc502ApplicationJSONObject;
    public TwipcResponse withTwipc502ApplicationJsonObject(Twipc502ApplicationJson twipc502ApplicationJSONObject) {
        this.twipc502ApplicationJSONObject = twipc502ApplicationJSONObject;
        return this;
    }
    public Twipc503ApplicationJson twipc503ApplicationJSONObject;
    public TwipcResponse withTwipc503ApplicationJsonObject(Twipc503ApplicationJson twipc503ApplicationJSONObject) {
        this.twipc503ApplicationJSONObject = twipc503ApplicationJSONObject;
        return this;
    }
    public Twipc504ApplicationJson twipc504ApplicationJSONObject;
    public TwipcResponse withTwipc504ApplicationJsonObject(Twipc504ApplicationJson twipc504ApplicationJSONObject) {
        this.twipc504ApplicationJSONObject = twipc504ApplicationJSONObject;
        return this;
    }
}