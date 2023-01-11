package openapisdk.models.operations;



public class VhinscResponse {
    public String contentType;
    public VhinscResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VhinscResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Vhinsc400ApplicationJson vhinsc400ApplicationJSONObject;
    public VhinscResponse withVhinsc400ApplicationJsonObject(Vhinsc400ApplicationJson vhinsc400ApplicationJSONObject) {
        this.vhinsc400ApplicationJSONObject = vhinsc400ApplicationJSONObject;
        return this;
    }
    public Vhinsc401ApplicationJson vhinsc401ApplicationJSONObject;
    public VhinscResponse withVhinsc401ApplicationJsonObject(Vhinsc401ApplicationJson vhinsc401ApplicationJSONObject) {
        this.vhinsc401ApplicationJSONObject = vhinsc401ApplicationJSONObject;
        return this;
    }
    public Vhinsc404ApplicationJson vhinsc404ApplicationJSONObject;
    public VhinscResponse withVhinsc404ApplicationJsonObject(Vhinsc404ApplicationJson vhinsc404ApplicationJSONObject) {
        this.vhinsc404ApplicationJSONObject = vhinsc404ApplicationJSONObject;
        return this;
    }
    public Vhinsc500ApplicationJson vhinsc500ApplicationJSONObject;
    public VhinscResponse withVhinsc500ApplicationJsonObject(Vhinsc500ApplicationJson vhinsc500ApplicationJSONObject) {
        this.vhinsc500ApplicationJSONObject = vhinsc500ApplicationJSONObject;
        return this;
    }
    public Vhinsc502ApplicationJson vhinsc502ApplicationJSONObject;
    public VhinscResponse withVhinsc502ApplicationJsonObject(Vhinsc502ApplicationJson vhinsc502ApplicationJSONObject) {
        this.vhinsc502ApplicationJSONObject = vhinsc502ApplicationJSONObject;
        return this;
    }
    public Vhinsc503ApplicationJson vhinsc503ApplicationJSONObject;
    public VhinscResponse withVhinsc503ApplicationJsonObject(Vhinsc503ApplicationJson vhinsc503ApplicationJSONObject) {
        this.vhinsc503ApplicationJSONObject = vhinsc503ApplicationJSONObject;
        return this;
    }
    public Vhinsc504ApplicationJson vhinsc504ApplicationJSONObject;
    public VhinscResponse withVhinsc504ApplicationJsonObject(Vhinsc504ApplicationJson vhinsc504ApplicationJSONObject) {
        this.vhinsc504ApplicationJSONObject = vhinsc504ApplicationJSONObject;
        return this;
    }
}