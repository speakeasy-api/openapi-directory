package openapisdk.models.operations;



public class RegriiResponse {
    public String contentType;
    public RegriiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegriiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Regrii400ApplicationJson regrii400ApplicationJSONObject;
    public RegriiResponse withRegrii400ApplicationJsonObject(Regrii400ApplicationJson regrii400ApplicationJSONObject) {
        this.regrii400ApplicationJSONObject = regrii400ApplicationJSONObject;
        return this;
    }
    public Regrii401ApplicationJson regrii401ApplicationJSONObject;
    public RegriiResponse withRegrii401ApplicationJsonObject(Regrii401ApplicationJson regrii401ApplicationJSONObject) {
        this.regrii401ApplicationJSONObject = regrii401ApplicationJSONObject;
        return this;
    }
    public Regrii404ApplicationJson regrii404ApplicationJSONObject;
    public RegriiResponse withRegrii404ApplicationJsonObject(Regrii404ApplicationJson regrii404ApplicationJSONObject) {
        this.regrii404ApplicationJSONObject = regrii404ApplicationJSONObject;
        return this;
    }
    public Regrii500ApplicationJson regrii500ApplicationJSONObject;
    public RegriiResponse withRegrii500ApplicationJsonObject(Regrii500ApplicationJson regrii500ApplicationJSONObject) {
        this.regrii500ApplicationJSONObject = regrii500ApplicationJSONObject;
        return this;
    }
    public Regrii502ApplicationJson regrii502ApplicationJSONObject;
    public RegriiResponse withRegrii502ApplicationJsonObject(Regrii502ApplicationJson regrii502ApplicationJSONObject) {
        this.regrii502ApplicationJSONObject = regrii502ApplicationJSONObject;
        return this;
    }
    public Regrii503ApplicationJson regrii503ApplicationJSONObject;
    public RegriiResponse withRegrii503ApplicationJsonObject(Regrii503ApplicationJson regrii503ApplicationJSONObject) {
        this.regrii503ApplicationJSONObject = regrii503ApplicationJSONObject;
        return this;
    }
    public Regrii504ApplicationJson regrii504ApplicationJSONObject;
    public RegriiResponse withRegrii504ApplicationJsonObject(Regrii504ApplicationJson regrii504ApplicationJSONObject) {
        this.regrii504ApplicationJSONObject = regrii504ApplicationJSONObject;
        return this;
    }
}