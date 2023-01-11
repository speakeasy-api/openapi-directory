package openapisdk.models.operations;



public class CvipcResponse {
    public String contentType;
    public CvipcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CvipcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Cvipc400ApplicationJson cvipc400ApplicationJSONObject;
    public CvipcResponse withCvipc400ApplicationJsonObject(Cvipc400ApplicationJson cvipc400ApplicationJSONObject) {
        this.cvipc400ApplicationJSONObject = cvipc400ApplicationJSONObject;
        return this;
    }
    public Cvipc401ApplicationJson cvipc401ApplicationJSONObject;
    public CvipcResponse withCvipc401ApplicationJsonObject(Cvipc401ApplicationJson cvipc401ApplicationJSONObject) {
        this.cvipc401ApplicationJSONObject = cvipc401ApplicationJSONObject;
        return this;
    }
    public Cvipc404ApplicationJson cvipc404ApplicationJSONObject;
    public CvipcResponse withCvipc404ApplicationJsonObject(Cvipc404ApplicationJson cvipc404ApplicationJSONObject) {
        this.cvipc404ApplicationJSONObject = cvipc404ApplicationJSONObject;
        return this;
    }
    public Cvipc500ApplicationJson cvipc500ApplicationJSONObject;
    public CvipcResponse withCvipc500ApplicationJsonObject(Cvipc500ApplicationJson cvipc500ApplicationJSONObject) {
        this.cvipc500ApplicationJSONObject = cvipc500ApplicationJSONObject;
        return this;
    }
    public Cvipc502ApplicationJson cvipc502ApplicationJSONObject;
    public CvipcResponse withCvipc502ApplicationJsonObject(Cvipc502ApplicationJson cvipc502ApplicationJSONObject) {
        this.cvipc502ApplicationJSONObject = cvipc502ApplicationJSONObject;
        return this;
    }
    public Cvipc503ApplicationJson cvipc503ApplicationJSONObject;
    public CvipcResponse withCvipc503ApplicationJsonObject(Cvipc503ApplicationJson cvipc503ApplicationJSONObject) {
        this.cvipc503ApplicationJSONObject = cvipc503ApplicationJSONObject;
        return this;
    }
    public Cvipc504ApplicationJson cvipc504ApplicationJSONObject;
    public CvipcResponse withCvipc504ApplicationJsonObject(Cvipc504ApplicationJson cvipc504ApplicationJSONObject) {
        this.cvipc504ApplicationJSONObject = cvipc504ApplicationJSONObject;
        return this;
    }
}