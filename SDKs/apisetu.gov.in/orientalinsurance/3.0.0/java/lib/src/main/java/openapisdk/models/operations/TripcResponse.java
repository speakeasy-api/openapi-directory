package openapisdk.models.operations;



public class TripcResponse {
    public String contentType;
    public TripcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TripcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Tripc400ApplicationJson tripc400ApplicationJSONObject;
    public TripcResponse withTripc400ApplicationJsonObject(Tripc400ApplicationJson tripc400ApplicationJSONObject) {
        this.tripc400ApplicationJSONObject = tripc400ApplicationJSONObject;
        return this;
    }
    public Tripc401ApplicationJson tripc401ApplicationJSONObject;
    public TripcResponse withTripc401ApplicationJsonObject(Tripc401ApplicationJson tripc401ApplicationJSONObject) {
        this.tripc401ApplicationJSONObject = tripc401ApplicationJSONObject;
        return this;
    }
    public Tripc404ApplicationJson tripc404ApplicationJSONObject;
    public TripcResponse withTripc404ApplicationJsonObject(Tripc404ApplicationJson tripc404ApplicationJSONObject) {
        this.tripc404ApplicationJSONObject = tripc404ApplicationJSONObject;
        return this;
    }
    public Tripc500ApplicationJson tripc500ApplicationJSONObject;
    public TripcResponse withTripc500ApplicationJsonObject(Tripc500ApplicationJson tripc500ApplicationJSONObject) {
        this.tripc500ApplicationJSONObject = tripc500ApplicationJSONObject;
        return this;
    }
    public Tripc502ApplicationJson tripc502ApplicationJSONObject;
    public TripcResponse withTripc502ApplicationJsonObject(Tripc502ApplicationJson tripc502ApplicationJSONObject) {
        this.tripc502ApplicationJSONObject = tripc502ApplicationJSONObject;
        return this;
    }
    public Tripc503ApplicationJson tripc503ApplicationJSONObject;
    public TripcResponse withTripc503ApplicationJsonObject(Tripc503ApplicationJson tripc503ApplicationJSONObject) {
        this.tripc503ApplicationJSONObject = tripc503ApplicationJSONObject;
        return this;
    }
    public Tripc504ApplicationJson tripc504ApplicationJSONObject;
    public TripcResponse withTripc504ApplicationJsonObject(Tripc504ApplicationJson tripc504ApplicationJSONObject) {
        this.tripc504ApplicationJSONObject = tripc504ApplicationJSONObject;
        return this;
    }
}