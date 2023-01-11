package openapisdk.models.operations;



public class FslcsResponse {
    public String contentType;
    public FslcsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FslcsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Fslcs400ApplicationJson fslcs400ApplicationJSONObject;
    public FslcsResponse withFslcs400ApplicationJsonObject(Fslcs400ApplicationJson fslcs400ApplicationJSONObject) {
        this.fslcs400ApplicationJSONObject = fslcs400ApplicationJSONObject;
        return this;
    }
    public Fslcs401ApplicationJson fslcs401ApplicationJSONObject;
    public FslcsResponse withFslcs401ApplicationJsonObject(Fslcs401ApplicationJson fslcs401ApplicationJSONObject) {
        this.fslcs401ApplicationJSONObject = fslcs401ApplicationJSONObject;
        return this;
    }
    public Fslcs404ApplicationJson fslcs404ApplicationJSONObject;
    public FslcsResponse withFslcs404ApplicationJsonObject(Fslcs404ApplicationJson fslcs404ApplicationJSONObject) {
        this.fslcs404ApplicationJSONObject = fslcs404ApplicationJSONObject;
        return this;
    }
    public Fslcs500ApplicationJson fslcs500ApplicationJSONObject;
    public FslcsResponse withFslcs500ApplicationJsonObject(Fslcs500ApplicationJson fslcs500ApplicationJSONObject) {
        this.fslcs500ApplicationJSONObject = fslcs500ApplicationJSONObject;
        return this;
    }
    public Fslcs502ApplicationJson fslcs502ApplicationJSONObject;
    public FslcsResponse withFslcs502ApplicationJsonObject(Fslcs502ApplicationJson fslcs502ApplicationJSONObject) {
        this.fslcs502ApplicationJSONObject = fslcs502ApplicationJSONObject;
        return this;
    }
    public Fslcs503ApplicationJson fslcs503ApplicationJSONObject;
    public FslcsResponse withFslcs503ApplicationJsonObject(Fslcs503ApplicationJson fslcs503ApplicationJSONObject) {
        this.fslcs503ApplicationJSONObject = fslcs503ApplicationJSONObject;
        return this;
    }
    public Fslcs504ApplicationJson fslcs504ApplicationJSONObject;
    public FslcsResponse withFslcs504ApplicationJsonObject(Fslcs504ApplicationJson fslcs504ApplicationJSONObject) {
        this.fslcs504ApplicationJSONObject = fslcs504ApplicationJSONObject;
        return this;
    }
}