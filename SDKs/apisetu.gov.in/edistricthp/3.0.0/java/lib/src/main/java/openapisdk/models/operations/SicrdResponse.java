package openapisdk.models.operations;



public class SicrdResponse {
    public String contentType;
    public SicrdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SicrdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Sicrd400ApplicationJson sicrd400ApplicationJSONObject;
    public SicrdResponse withSicrd400ApplicationJsonObject(Sicrd400ApplicationJson sicrd400ApplicationJSONObject) {
        this.sicrd400ApplicationJSONObject = sicrd400ApplicationJSONObject;
        return this;
    }
    public Sicrd401ApplicationJson sicrd401ApplicationJSONObject;
    public SicrdResponse withSicrd401ApplicationJsonObject(Sicrd401ApplicationJson sicrd401ApplicationJSONObject) {
        this.sicrd401ApplicationJSONObject = sicrd401ApplicationJSONObject;
        return this;
    }
    public Sicrd404ApplicationJson sicrd404ApplicationJSONObject;
    public SicrdResponse withSicrd404ApplicationJsonObject(Sicrd404ApplicationJson sicrd404ApplicationJSONObject) {
        this.sicrd404ApplicationJSONObject = sicrd404ApplicationJSONObject;
        return this;
    }
    public Sicrd500ApplicationJson sicrd500ApplicationJSONObject;
    public SicrdResponse withSicrd500ApplicationJsonObject(Sicrd500ApplicationJson sicrd500ApplicationJSONObject) {
        this.sicrd500ApplicationJSONObject = sicrd500ApplicationJSONObject;
        return this;
    }
    public Sicrd502ApplicationJson sicrd502ApplicationJSONObject;
    public SicrdResponse withSicrd502ApplicationJsonObject(Sicrd502ApplicationJson sicrd502ApplicationJSONObject) {
        this.sicrd502ApplicationJSONObject = sicrd502ApplicationJSONObject;
        return this;
    }
    public Sicrd503ApplicationJson sicrd503ApplicationJSONObject;
    public SicrdResponse withSicrd503ApplicationJsonObject(Sicrd503ApplicationJson sicrd503ApplicationJSONObject) {
        this.sicrd503ApplicationJSONObject = sicrd503ApplicationJSONObject;
        return this;
    }
    public Sicrd504ApplicationJson sicrd504ApplicationJSONObject;
    public SicrdResponse withSicrd504ApplicationJsonObject(Sicrd504ApplicationJson sicrd504ApplicationJSONObject) {
        this.sicrd504ApplicationJSONObject = sicrd504ApplicationJSONObject;
        return this;
    }
}