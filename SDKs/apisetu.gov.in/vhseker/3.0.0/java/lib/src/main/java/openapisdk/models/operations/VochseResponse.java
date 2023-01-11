package openapisdk.models.operations;



public class VochseResponse {
    public String contentType;
    public VochseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VochseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Vochse400ApplicationJson vochse400ApplicationJSONObject;
    public VochseResponse withVochse400ApplicationJsonObject(Vochse400ApplicationJson vochse400ApplicationJSONObject) {
        this.vochse400ApplicationJSONObject = vochse400ApplicationJSONObject;
        return this;
    }
    public Vochse401ApplicationJson vochse401ApplicationJSONObject;
    public VochseResponse withVochse401ApplicationJsonObject(Vochse401ApplicationJson vochse401ApplicationJSONObject) {
        this.vochse401ApplicationJSONObject = vochse401ApplicationJSONObject;
        return this;
    }
    public Vochse404ApplicationJson vochse404ApplicationJSONObject;
    public VochseResponse withVochse404ApplicationJsonObject(Vochse404ApplicationJson vochse404ApplicationJSONObject) {
        this.vochse404ApplicationJSONObject = vochse404ApplicationJSONObject;
        return this;
    }
    public Vochse500ApplicationJson vochse500ApplicationJSONObject;
    public VochseResponse withVochse500ApplicationJsonObject(Vochse500ApplicationJson vochse500ApplicationJSONObject) {
        this.vochse500ApplicationJSONObject = vochse500ApplicationJSONObject;
        return this;
    }
    public Vochse502ApplicationJson vochse502ApplicationJSONObject;
    public VochseResponse withVochse502ApplicationJsonObject(Vochse502ApplicationJson vochse502ApplicationJSONObject) {
        this.vochse502ApplicationJSONObject = vochse502ApplicationJSONObject;
        return this;
    }
    public Vochse503ApplicationJson vochse503ApplicationJSONObject;
    public VochseResponse withVochse503ApplicationJsonObject(Vochse503ApplicationJson vochse503ApplicationJSONObject) {
        this.vochse503ApplicationJSONObject = vochse503ApplicationJSONObject;
        return this;
    }
    public Vochse504ApplicationJson vochse504ApplicationJSONObject;
    public VochseResponse withVochse504ApplicationJsonObject(Vochse504ApplicationJson vochse504ApplicationJSONObject) {
        this.vochse504ApplicationJSONObject = vochse504ApplicationJSONObject;
        return this;
    }
}