package openapisdk.models.operations;



public class VrwmiResponse {
    public String contentType;
    public VrwmiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VrwmiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Vrwmi400ApplicationJson vrwmi400ApplicationJSONObject;
    public VrwmiResponse withVrwmi400ApplicationJsonObject(Vrwmi400ApplicationJson vrwmi400ApplicationJSONObject) {
        this.vrwmi400ApplicationJSONObject = vrwmi400ApplicationJSONObject;
        return this;
    }
    public Vrwmi401ApplicationJson vrwmi401ApplicationJSONObject;
    public VrwmiResponse withVrwmi401ApplicationJsonObject(Vrwmi401ApplicationJson vrwmi401ApplicationJSONObject) {
        this.vrwmi401ApplicationJSONObject = vrwmi401ApplicationJSONObject;
        return this;
    }
    public Vrwmi404ApplicationJson vrwmi404ApplicationJSONObject;
    public VrwmiResponse withVrwmi404ApplicationJsonObject(Vrwmi404ApplicationJson vrwmi404ApplicationJSONObject) {
        this.vrwmi404ApplicationJSONObject = vrwmi404ApplicationJSONObject;
        return this;
    }
    public Vrwmi500ApplicationJson vrwmi500ApplicationJSONObject;
    public VrwmiResponse withVrwmi500ApplicationJsonObject(Vrwmi500ApplicationJson vrwmi500ApplicationJSONObject) {
        this.vrwmi500ApplicationJSONObject = vrwmi500ApplicationJSONObject;
        return this;
    }
    public Vrwmi502ApplicationJson vrwmi502ApplicationJSONObject;
    public VrwmiResponse withVrwmi502ApplicationJsonObject(Vrwmi502ApplicationJson vrwmi502ApplicationJSONObject) {
        this.vrwmi502ApplicationJSONObject = vrwmi502ApplicationJSONObject;
        return this;
    }
    public Vrwmi503ApplicationJson vrwmi503ApplicationJSONObject;
    public VrwmiResponse withVrwmi503ApplicationJsonObject(Vrwmi503ApplicationJson vrwmi503ApplicationJSONObject) {
        this.vrwmi503ApplicationJSONObject = vrwmi503ApplicationJSONObject;
        return this;
    }
    public Vrwmi504ApplicationJson vrwmi504ApplicationJSONObject;
    public VrwmiResponse withVrwmi504ApplicationJsonObject(Vrwmi504ApplicationJson vrwmi504ApplicationJSONObject) {
        this.vrwmi504ApplicationJSONObject = vrwmi504ApplicationJSONObject;
        return this;
    }
}