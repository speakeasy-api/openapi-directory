package openapisdk.models.operations;



public class GrredResponse {
    public String contentType;
    public GrredResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GrredResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Grred400ApplicationJson grred400ApplicationJSONObject;
    public GrredResponse withGrred400ApplicationJsonObject(Grred400ApplicationJson grred400ApplicationJSONObject) {
        this.grred400ApplicationJSONObject = grred400ApplicationJSONObject;
        return this;
    }
    public Grred401ApplicationJson grred401ApplicationJSONObject;
    public GrredResponse withGrred401ApplicationJsonObject(Grred401ApplicationJson grred401ApplicationJSONObject) {
        this.grred401ApplicationJSONObject = grred401ApplicationJSONObject;
        return this;
    }
    public Grred404ApplicationJson grred404ApplicationJSONObject;
    public GrredResponse withGrred404ApplicationJsonObject(Grred404ApplicationJson grred404ApplicationJSONObject) {
        this.grred404ApplicationJSONObject = grred404ApplicationJSONObject;
        return this;
    }
    public Grred500ApplicationJson grred500ApplicationJSONObject;
    public GrredResponse withGrred500ApplicationJsonObject(Grred500ApplicationJson grred500ApplicationJSONObject) {
        this.grred500ApplicationJSONObject = grred500ApplicationJSONObject;
        return this;
    }
    public Grred502ApplicationJson grred502ApplicationJSONObject;
    public GrredResponse withGrred502ApplicationJsonObject(Grred502ApplicationJson grred502ApplicationJSONObject) {
        this.grred502ApplicationJSONObject = grred502ApplicationJSONObject;
        return this;
    }
    public Grred503ApplicationJson grred503ApplicationJSONObject;
    public GrredResponse withGrred503ApplicationJsonObject(Grred503ApplicationJson grred503ApplicationJSONObject) {
        this.grred503ApplicationJSONObject = grred503ApplicationJSONObject;
        return this;
    }
    public Grred504ApplicationJson grred504ApplicationJSONObject;
    public GrredResponse withGrred504ApplicationJsonObject(Grred504ApplicationJson grred504ApplicationJSONObject) {
        this.grred504ApplicationJSONObject = grred504ApplicationJSONObject;
        return this;
    }
}