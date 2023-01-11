package openapisdk.models.operations;



public class RelcsResponse {
    public String contentType;
    public RelcsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RelcsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Relcs400ApplicationJson relcs400ApplicationJSONObject;
    public RelcsResponse withRelcs400ApplicationJsonObject(Relcs400ApplicationJson relcs400ApplicationJSONObject) {
        this.relcs400ApplicationJSONObject = relcs400ApplicationJSONObject;
        return this;
    }
    public Relcs401ApplicationJson relcs401ApplicationJSONObject;
    public RelcsResponse withRelcs401ApplicationJsonObject(Relcs401ApplicationJson relcs401ApplicationJSONObject) {
        this.relcs401ApplicationJSONObject = relcs401ApplicationJSONObject;
        return this;
    }
    public Relcs404ApplicationJson relcs404ApplicationJSONObject;
    public RelcsResponse withRelcs404ApplicationJsonObject(Relcs404ApplicationJson relcs404ApplicationJSONObject) {
        this.relcs404ApplicationJSONObject = relcs404ApplicationJSONObject;
        return this;
    }
    public Relcs500ApplicationJson relcs500ApplicationJSONObject;
    public RelcsResponse withRelcs500ApplicationJsonObject(Relcs500ApplicationJson relcs500ApplicationJSONObject) {
        this.relcs500ApplicationJSONObject = relcs500ApplicationJSONObject;
        return this;
    }
    public Relcs502ApplicationJson relcs502ApplicationJSONObject;
    public RelcsResponse withRelcs502ApplicationJsonObject(Relcs502ApplicationJson relcs502ApplicationJSONObject) {
        this.relcs502ApplicationJSONObject = relcs502ApplicationJSONObject;
        return this;
    }
    public Relcs503ApplicationJson relcs503ApplicationJSONObject;
    public RelcsResponse withRelcs503ApplicationJsonObject(Relcs503ApplicationJson relcs503ApplicationJSONObject) {
        this.relcs503ApplicationJSONObject = relcs503ApplicationJSONObject;
        return this;
    }
    public Relcs504ApplicationJson relcs504ApplicationJSONObject;
    public RelcsResponse withRelcs504ApplicationJsonObject(Relcs504ApplicationJson relcs504ApplicationJSONObject) {
        this.relcs504ApplicationJSONObject = relcs504ApplicationJSONObject;
        return this;
    }
}