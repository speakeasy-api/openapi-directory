package openapisdk.models.operations;



public class RvcerResponse {
    public byte[] body;
    public RvcerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RvcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RvcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Rvcer400ApplicationJson rvcer400ApplicationJSONObject;
    public RvcerResponse withRvcer400ApplicationJsonObject(Rvcer400ApplicationJson rvcer400ApplicationJSONObject) {
        this.rvcer400ApplicationJSONObject = rvcer400ApplicationJSONObject;
        return this;
    }
    public Rvcer401ApplicationJson rvcer401ApplicationJSONObject;
    public RvcerResponse withRvcer401ApplicationJsonObject(Rvcer401ApplicationJson rvcer401ApplicationJSONObject) {
        this.rvcer401ApplicationJSONObject = rvcer401ApplicationJSONObject;
        return this;
    }
    public Rvcer404ApplicationJson rvcer404ApplicationJSONObject;
    public RvcerResponse withRvcer404ApplicationJsonObject(Rvcer404ApplicationJson rvcer404ApplicationJSONObject) {
        this.rvcer404ApplicationJSONObject = rvcer404ApplicationJSONObject;
        return this;
    }
    public Rvcer500ApplicationJson rvcer500ApplicationJSONObject;
    public RvcerResponse withRvcer500ApplicationJsonObject(Rvcer500ApplicationJson rvcer500ApplicationJSONObject) {
        this.rvcer500ApplicationJSONObject = rvcer500ApplicationJSONObject;
        return this;
    }
    public Rvcer502ApplicationJson rvcer502ApplicationJSONObject;
    public RvcerResponse withRvcer502ApplicationJsonObject(Rvcer502ApplicationJson rvcer502ApplicationJSONObject) {
        this.rvcer502ApplicationJSONObject = rvcer502ApplicationJSONObject;
        return this;
    }
    public Rvcer503ApplicationJson rvcer503ApplicationJSONObject;
    public RvcerResponse withRvcer503ApplicationJsonObject(Rvcer503ApplicationJson rvcer503ApplicationJSONObject) {
        this.rvcer503ApplicationJSONObject = rvcer503ApplicationJSONObject;
        return this;
    }
    public Rvcer504ApplicationJson rvcer504ApplicationJSONObject;
    public RvcerResponse withRvcer504ApplicationJsonObject(Rvcer504ApplicationJson rvcer504ApplicationJSONObject) {
        this.rvcer504ApplicationJSONObject = rvcer504ApplicationJSONObject;
        return this;
    }
}