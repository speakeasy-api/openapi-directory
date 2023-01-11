package openapisdk.models.operations;



public class CyipcResponse {
    public String contentType;
    public CyipcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CyipcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Cyipc400ApplicationJson cyipc400ApplicationJSONObject;
    public CyipcResponse withCyipc400ApplicationJsonObject(Cyipc400ApplicationJson cyipc400ApplicationJSONObject) {
        this.cyipc400ApplicationJSONObject = cyipc400ApplicationJSONObject;
        return this;
    }
    public Cyipc401ApplicationJson cyipc401ApplicationJSONObject;
    public CyipcResponse withCyipc401ApplicationJsonObject(Cyipc401ApplicationJson cyipc401ApplicationJSONObject) {
        this.cyipc401ApplicationJSONObject = cyipc401ApplicationJSONObject;
        return this;
    }
    public Cyipc404ApplicationJson cyipc404ApplicationJSONObject;
    public CyipcResponse withCyipc404ApplicationJsonObject(Cyipc404ApplicationJson cyipc404ApplicationJSONObject) {
        this.cyipc404ApplicationJSONObject = cyipc404ApplicationJSONObject;
        return this;
    }
    public Cyipc500ApplicationJson cyipc500ApplicationJSONObject;
    public CyipcResponse withCyipc500ApplicationJsonObject(Cyipc500ApplicationJson cyipc500ApplicationJSONObject) {
        this.cyipc500ApplicationJSONObject = cyipc500ApplicationJSONObject;
        return this;
    }
    public Cyipc502ApplicationJson cyipc502ApplicationJSONObject;
    public CyipcResponse withCyipc502ApplicationJsonObject(Cyipc502ApplicationJson cyipc502ApplicationJSONObject) {
        this.cyipc502ApplicationJSONObject = cyipc502ApplicationJSONObject;
        return this;
    }
    public Cyipc503ApplicationJson cyipc503ApplicationJSONObject;
    public CyipcResponse withCyipc503ApplicationJsonObject(Cyipc503ApplicationJson cyipc503ApplicationJSONObject) {
        this.cyipc503ApplicationJSONObject = cyipc503ApplicationJSONObject;
        return this;
    }
    public Cyipc504ApplicationJson cyipc504ApplicationJSONObject;
    public CyipcResponse withCyipc504ApplicationJsonObject(Cyipc504ApplicationJson cyipc504ApplicationJSONObject) {
        this.cyipc504ApplicationJSONObject = cyipc504ApplicationJSONObject;
        return this;
    }
}