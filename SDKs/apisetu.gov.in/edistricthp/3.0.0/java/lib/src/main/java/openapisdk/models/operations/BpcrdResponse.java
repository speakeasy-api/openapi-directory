package openapisdk.models.operations;



public class BpcrdResponse {
    public String contentType;
    public BpcrdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BpcrdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Bpcrd400ApplicationJson bpcrd400ApplicationJSONObject;
    public BpcrdResponse withBpcrd400ApplicationJsonObject(Bpcrd400ApplicationJson bpcrd400ApplicationJSONObject) {
        this.bpcrd400ApplicationJSONObject = bpcrd400ApplicationJSONObject;
        return this;
    }
    public Bpcrd401ApplicationJson bpcrd401ApplicationJSONObject;
    public BpcrdResponse withBpcrd401ApplicationJsonObject(Bpcrd401ApplicationJson bpcrd401ApplicationJSONObject) {
        this.bpcrd401ApplicationJSONObject = bpcrd401ApplicationJSONObject;
        return this;
    }
    public Bpcrd404ApplicationJson bpcrd404ApplicationJSONObject;
    public BpcrdResponse withBpcrd404ApplicationJsonObject(Bpcrd404ApplicationJson bpcrd404ApplicationJSONObject) {
        this.bpcrd404ApplicationJSONObject = bpcrd404ApplicationJSONObject;
        return this;
    }
    public Bpcrd500ApplicationJson bpcrd500ApplicationJSONObject;
    public BpcrdResponse withBpcrd500ApplicationJsonObject(Bpcrd500ApplicationJson bpcrd500ApplicationJSONObject) {
        this.bpcrd500ApplicationJSONObject = bpcrd500ApplicationJSONObject;
        return this;
    }
    public Bpcrd502ApplicationJson bpcrd502ApplicationJSONObject;
    public BpcrdResponse withBpcrd502ApplicationJsonObject(Bpcrd502ApplicationJson bpcrd502ApplicationJSONObject) {
        this.bpcrd502ApplicationJSONObject = bpcrd502ApplicationJSONObject;
        return this;
    }
    public Bpcrd503ApplicationJson bpcrd503ApplicationJSONObject;
    public BpcrdResponse withBpcrd503ApplicationJsonObject(Bpcrd503ApplicationJson bpcrd503ApplicationJSONObject) {
        this.bpcrd503ApplicationJSONObject = bpcrd503ApplicationJSONObject;
        return this;
    }
    public Bpcrd504ApplicationJson bpcrd504ApplicationJSONObject;
    public BpcrdResponse withBpcrd504ApplicationJsonObject(Bpcrd504ApplicationJson bpcrd504ApplicationJSONObject) {
        this.bpcrd504ApplicationJSONObject = bpcrd504ApplicationJSONObject;
        return this;
    }
}