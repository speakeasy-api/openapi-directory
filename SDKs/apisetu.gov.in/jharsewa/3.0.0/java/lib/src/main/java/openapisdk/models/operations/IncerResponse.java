package openapisdk.models.operations;



public class IncerResponse {
    public String contentType;
    public IncerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IncerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Incer400ApplicationJson incer400ApplicationJSONObject;
    public IncerResponse withIncer400ApplicationJsonObject(Incer400ApplicationJson incer400ApplicationJSONObject) {
        this.incer400ApplicationJSONObject = incer400ApplicationJSONObject;
        return this;
    }
    public Incer401ApplicationJson incer401ApplicationJSONObject;
    public IncerResponse withIncer401ApplicationJsonObject(Incer401ApplicationJson incer401ApplicationJSONObject) {
        this.incer401ApplicationJSONObject = incer401ApplicationJSONObject;
        return this;
    }
    public Incer404ApplicationJson incer404ApplicationJSONObject;
    public IncerResponse withIncer404ApplicationJsonObject(Incer404ApplicationJson incer404ApplicationJSONObject) {
        this.incer404ApplicationJSONObject = incer404ApplicationJSONObject;
        return this;
    }
    public Incer500ApplicationJson incer500ApplicationJSONObject;
    public IncerResponse withIncer500ApplicationJsonObject(Incer500ApplicationJson incer500ApplicationJSONObject) {
        this.incer500ApplicationJSONObject = incer500ApplicationJSONObject;
        return this;
    }
    public Incer502ApplicationJson incer502ApplicationJSONObject;
    public IncerResponse withIncer502ApplicationJsonObject(Incer502ApplicationJson incer502ApplicationJSONObject) {
        this.incer502ApplicationJSONObject = incer502ApplicationJSONObject;
        return this;
    }
    public Incer503ApplicationJson incer503ApplicationJSONObject;
    public IncerResponse withIncer503ApplicationJsonObject(Incer503ApplicationJson incer503ApplicationJSONObject) {
        this.incer503ApplicationJSONObject = incer503ApplicationJSONObject;
        return this;
    }
    public Incer504ApplicationJson incer504ApplicationJSONObject;
    public IncerResponse withIncer504ApplicationJsonObject(Incer504ApplicationJson incer504ApplicationJSONObject) {
        this.incer504ApplicationJSONObject = incer504ApplicationJSONObject;
        return this;
    }
}