package openapisdk.models.operations;



public class MalcsResponse {
    public String contentType;
    public MalcsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MalcsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Malcs400ApplicationJson malcs400ApplicationJSONObject;
    public MalcsResponse withMalcs400ApplicationJsonObject(Malcs400ApplicationJson malcs400ApplicationJSONObject) {
        this.malcs400ApplicationJSONObject = malcs400ApplicationJSONObject;
        return this;
    }
    public Malcs401ApplicationJson malcs401ApplicationJSONObject;
    public MalcsResponse withMalcs401ApplicationJsonObject(Malcs401ApplicationJson malcs401ApplicationJSONObject) {
        this.malcs401ApplicationJSONObject = malcs401ApplicationJSONObject;
        return this;
    }
    public Malcs404ApplicationJson malcs404ApplicationJSONObject;
    public MalcsResponse withMalcs404ApplicationJsonObject(Malcs404ApplicationJson malcs404ApplicationJSONObject) {
        this.malcs404ApplicationJSONObject = malcs404ApplicationJSONObject;
        return this;
    }
    public Malcs500ApplicationJson malcs500ApplicationJSONObject;
    public MalcsResponse withMalcs500ApplicationJsonObject(Malcs500ApplicationJson malcs500ApplicationJSONObject) {
        this.malcs500ApplicationJSONObject = malcs500ApplicationJSONObject;
        return this;
    }
    public Malcs502ApplicationJson malcs502ApplicationJSONObject;
    public MalcsResponse withMalcs502ApplicationJsonObject(Malcs502ApplicationJson malcs502ApplicationJSONObject) {
        this.malcs502ApplicationJSONObject = malcs502ApplicationJSONObject;
        return this;
    }
    public Malcs503ApplicationJson malcs503ApplicationJSONObject;
    public MalcsResponse withMalcs503ApplicationJsonObject(Malcs503ApplicationJson malcs503ApplicationJSONObject) {
        this.malcs503ApplicationJSONObject = malcs503ApplicationJSONObject;
        return this;
    }
    public Malcs504ApplicationJson malcs504ApplicationJSONObject;
    public MalcsResponse withMalcs504ApplicationJsonObject(Malcs504ApplicationJson malcs504ApplicationJSONObject) {
        this.malcs504ApplicationJSONObject = malcs504ApplicationJSONObject;
        return this;
    }
}