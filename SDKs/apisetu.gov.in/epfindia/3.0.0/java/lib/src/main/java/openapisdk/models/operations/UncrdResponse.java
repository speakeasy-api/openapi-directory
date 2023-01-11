package openapisdk.models.operations;



public class UncrdResponse {
    public String contentType;
    public UncrdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UncrdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Uncrd400ApplicationJson uncrd400ApplicationJSONObject;
    public UncrdResponse withUncrd400ApplicationJsonObject(Uncrd400ApplicationJson uncrd400ApplicationJSONObject) {
        this.uncrd400ApplicationJSONObject = uncrd400ApplicationJSONObject;
        return this;
    }
    public Uncrd401ApplicationJson uncrd401ApplicationJSONObject;
    public UncrdResponse withUncrd401ApplicationJsonObject(Uncrd401ApplicationJson uncrd401ApplicationJSONObject) {
        this.uncrd401ApplicationJSONObject = uncrd401ApplicationJSONObject;
        return this;
    }
    public Uncrd404ApplicationJson uncrd404ApplicationJSONObject;
    public UncrdResponse withUncrd404ApplicationJsonObject(Uncrd404ApplicationJson uncrd404ApplicationJSONObject) {
        this.uncrd404ApplicationJSONObject = uncrd404ApplicationJSONObject;
        return this;
    }
    public Uncrd500ApplicationJson uncrd500ApplicationJSONObject;
    public UncrdResponse withUncrd500ApplicationJsonObject(Uncrd500ApplicationJson uncrd500ApplicationJSONObject) {
        this.uncrd500ApplicationJSONObject = uncrd500ApplicationJSONObject;
        return this;
    }
    public Uncrd502ApplicationJson uncrd502ApplicationJSONObject;
    public UncrdResponse withUncrd502ApplicationJsonObject(Uncrd502ApplicationJson uncrd502ApplicationJSONObject) {
        this.uncrd502ApplicationJSONObject = uncrd502ApplicationJSONObject;
        return this;
    }
    public Uncrd503ApplicationJson uncrd503ApplicationJSONObject;
    public UncrdResponse withUncrd503ApplicationJsonObject(Uncrd503ApplicationJson uncrd503ApplicationJSONObject) {
        this.uncrd503ApplicationJSONObject = uncrd503ApplicationJSONObject;
        return this;
    }
    public Uncrd504ApplicationJson uncrd504ApplicationJSONObject;
    public UncrdResponse withUncrd504ApplicationJsonObject(Uncrd504ApplicationJson uncrd504ApplicationJSONObject) {
        this.uncrd504ApplicationJSONObject = uncrd504ApplicationJSONObject;
        return this;
    }
}