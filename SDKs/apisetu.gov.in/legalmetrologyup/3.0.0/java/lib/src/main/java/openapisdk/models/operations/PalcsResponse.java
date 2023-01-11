package openapisdk.models.operations;



public class PalcsResponse {
    public String contentType;
    public PalcsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PalcsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Palcs400ApplicationJson palcs400ApplicationJSONObject;
    public PalcsResponse withPalcs400ApplicationJsonObject(Palcs400ApplicationJson palcs400ApplicationJSONObject) {
        this.palcs400ApplicationJSONObject = palcs400ApplicationJSONObject;
        return this;
    }
    public Palcs401ApplicationJson palcs401ApplicationJSONObject;
    public PalcsResponse withPalcs401ApplicationJsonObject(Palcs401ApplicationJson palcs401ApplicationJSONObject) {
        this.palcs401ApplicationJSONObject = palcs401ApplicationJSONObject;
        return this;
    }
    public Palcs404ApplicationJson palcs404ApplicationJSONObject;
    public PalcsResponse withPalcs404ApplicationJsonObject(Palcs404ApplicationJson palcs404ApplicationJSONObject) {
        this.palcs404ApplicationJSONObject = palcs404ApplicationJSONObject;
        return this;
    }
    public Palcs500ApplicationJson palcs500ApplicationJSONObject;
    public PalcsResponse withPalcs500ApplicationJsonObject(Palcs500ApplicationJson palcs500ApplicationJSONObject) {
        this.palcs500ApplicationJSONObject = palcs500ApplicationJSONObject;
        return this;
    }
    public Palcs502ApplicationJson palcs502ApplicationJSONObject;
    public PalcsResponse withPalcs502ApplicationJsonObject(Palcs502ApplicationJson palcs502ApplicationJSONObject) {
        this.palcs502ApplicationJSONObject = palcs502ApplicationJSONObject;
        return this;
    }
    public Palcs503ApplicationJson palcs503ApplicationJSONObject;
    public PalcsResponse withPalcs503ApplicationJsonObject(Palcs503ApplicationJson palcs503ApplicationJSONObject) {
        this.palcs503ApplicationJSONObject = palcs503ApplicationJSONObject;
        return this;
    }
    public Palcs504ApplicationJson palcs504ApplicationJSONObject;
    public PalcsResponse withPalcs504ApplicationJsonObject(Palcs504ApplicationJson palcs504ApplicationJSONObject) {
        this.palcs504ApplicationJSONObject = palcs504ApplicationJSONObject;
        return this;
    }
}