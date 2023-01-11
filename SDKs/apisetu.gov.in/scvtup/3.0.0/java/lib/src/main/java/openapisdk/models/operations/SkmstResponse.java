package openapisdk.models.operations;



public class SkmstResponse {
    public String contentType;
    public SkmstResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SkmstResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Skmst400ApplicationJson skmst400ApplicationJSONObject;
    public SkmstResponse withSkmst400ApplicationJsonObject(Skmst400ApplicationJson skmst400ApplicationJSONObject) {
        this.skmst400ApplicationJSONObject = skmst400ApplicationJSONObject;
        return this;
    }
    public Skmst401ApplicationJson skmst401ApplicationJSONObject;
    public SkmstResponse withSkmst401ApplicationJsonObject(Skmst401ApplicationJson skmst401ApplicationJSONObject) {
        this.skmst401ApplicationJSONObject = skmst401ApplicationJSONObject;
        return this;
    }
    public Skmst404ApplicationJson skmst404ApplicationJSONObject;
    public SkmstResponse withSkmst404ApplicationJsonObject(Skmst404ApplicationJson skmst404ApplicationJSONObject) {
        this.skmst404ApplicationJSONObject = skmst404ApplicationJSONObject;
        return this;
    }
    public Skmst500ApplicationJson skmst500ApplicationJSONObject;
    public SkmstResponse withSkmst500ApplicationJsonObject(Skmst500ApplicationJson skmst500ApplicationJSONObject) {
        this.skmst500ApplicationJSONObject = skmst500ApplicationJSONObject;
        return this;
    }
    public Skmst502ApplicationJson skmst502ApplicationJSONObject;
    public SkmstResponse withSkmst502ApplicationJsonObject(Skmst502ApplicationJson skmst502ApplicationJSONObject) {
        this.skmst502ApplicationJSONObject = skmst502ApplicationJSONObject;
        return this;
    }
    public Skmst503ApplicationJson skmst503ApplicationJSONObject;
    public SkmstResponse withSkmst503ApplicationJsonObject(Skmst503ApplicationJson skmst503ApplicationJSONObject) {
        this.skmst503ApplicationJSONObject = skmst503ApplicationJSONObject;
        return this;
    }
    public Skmst504ApplicationJson skmst504ApplicationJSONObject;
    public SkmstResponse withSkmst504ApplicationJsonObject(Skmst504ApplicationJson skmst504ApplicationJSONObject) {
        this.skmst504ApplicationJSONObject = skmst504ApplicationJSONObject;
        return this;
    }
}