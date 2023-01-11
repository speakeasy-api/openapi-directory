package openapisdk.models.operations;



public class DelcsResponse {
    public String contentType;
    public DelcsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DelcsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Delcs400ApplicationJson delcs400ApplicationJSONObject;
    public DelcsResponse withDelcs400ApplicationJsonObject(Delcs400ApplicationJson delcs400ApplicationJSONObject) {
        this.delcs400ApplicationJSONObject = delcs400ApplicationJSONObject;
        return this;
    }
    public Delcs401ApplicationJson delcs401ApplicationJSONObject;
    public DelcsResponse withDelcs401ApplicationJsonObject(Delcs401ApplicationJson delcs401ApplicationJSONObject) {
        this.delcs401ApplicationJSONObject = delcs401ApplicationJSONObject;
        return this;
    }
    public Delcs404ApplicationJson delcs404ApplicationJSONObject;
    public DelcsResponse withDelcs404ApplicationJsonObject(Delcs404ApplicationJson delcs404ApplicationJSONObject) {
        this.delcs404ApplicationJSONObject = delcs404ApplicationJSONObject;
        return this;
    }
    public Delcs500ApplicationJson delcs500ApplicationJSONObject;
    public DelcsResponse withDelcs500ApplicationJsonObject(Delcs500ApplicationJson delcs500ApplicationJSONObject) {
        this.delcs500ApplicationJSONObject = delcs500ApplicationJSONObject;
        return this;
    }
    public Delcs502ApplicationJson delcs502ApplicationJSONObject;
    public DelcsResponse withDelcs502ApplicationJsonObject(Delcs502ApplicationJson delcs502ApplicationJSONObject) {
        this.delcs502ApplicationJSONObject = delcs502ApplicationJSONObject;
        return this;
    }
    public Delcs503ApplicationJson delcs503ApplicationJSONObject;
    public DelcsResponse withDelcs503ApplicationJsonObject(Delcs503ApplicationJson delcs503ApplicationJSONObject) {
        this.delcs503ApplicationJSONObject = delcs503ApplicationJSONObject;
        return this;
    }
    public Delcs504ApplicationJson delcs504ApplicationJSONObject;
    public DelcsResponse withDelcs504ApplicationJsonObject(Delcs504ApplicationJson delcs504ApplicationJSONObject) {
        this.delcs504ApplicationJSONObject = delcs504ApplicationJSONObject;
        return this;
    }
}