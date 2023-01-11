package openapisdk.models.operations;



public class RpcerResponse {
    public String contentType;
    public RpcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RpcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Rpcer400ApplicationJson rpcer400ApplicationJSONObject;
    public RpcerResponse withRpcer400ApplicationJsonObject(Rpcer400ApplicationJson rpcer400ApplicationJSONObject) {
        this.rpcer400ApplicationJSONObject = rpcer400ApplicationJSONObject;
        return this;
    }
    public Rpcer401ApplicationJson rpcer401ApplicationJSONObject;
    public RpcerResponse withRpcer401ApplicationJsonObject(Rpcer401ApplicationJson rpcer401ApplicationJSONObject) {
        this.rpcer401ApplicationJSONObject = rpcer401ApplicationJSONObject;
        return this;
    }
    public Rpcer404ApplicationJson rpcer404ApplicationJSONObject;
    public RpcerResponse withRpcer404ApplicationJsonObject(Rpcer404ApplicationJson rpcer404ApplicationJSONObject) {
        this.rpcer404ApplicationJSONObject = rpcer404ApplicationJSONObject;
        return this;
    }
    public Rpcer500ApplicationJson rpcer500ApplicationJSONObject;
    public RpcerResponse withRpcer500ApplicationJsonObject(Rpcer500ApplicationJson rpcer500ApplicationJSONObject) {
        this.rpcer500ApplicationJSONObject = rpcer500ApplicationJSONObject;
        return this;
    }
    public Rpcer502ApplicationJson rpcer502ApplicationJSONObject;
    public RpcerResponse withRpcer502ApplicationJsonObject(Rpcer502ApplicationJson rpcer502ApplicationJSONObject) {
        this.rpcer502ApplicationJSONObject = rpcer502ApplicationJSONObject;
        return this;
    }
    public Rpcer503ApplicationJson rpcer503ApplicationJSONObject;
    public RpcerResponse withRpcer503ApplicationJsonObject(Rpcer503ApplicationJson rpcer503ApplicationJSONObject) {
        this.rpcer503ApplicationJSONObject = rpcer503ApplicationJSONObject;
        return this;
    }
    public Rpcer504ApplicationJson rpcer504ApplicationJSONObject;
    public RpcerResponse withRpcer504ApplicationJsonObject(Rpcer504ApplicationJson rpcer504ApplicationJSONObject) {
        this.rpcer504ApplicationJSONObject = rpcer504ApplicationJSONObject;
        return this;
    }
}