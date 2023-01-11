package openapisdk.models.operations;



public class BacerResponse {
    public String contentType;
    public BacerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BacerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Bacer400ApplicationJson bacer400ApplicationJSONObject;
    public BacerResponse withBacer400ApplicationJsonObject(Bacer400ApplicationJson bacer400ApplicationJSONObject) {
        this.bacer400ApplicationJSONObject = bacer400ApplicationJSONObject;
        return this;
    }
    public Bacer401ApplicationJson bacer401ApplicationJSONObject;
    public BacerResponse withBacer401ApplicationJsonObject(Bacer401ApplicationJson bacer401ApplicationJSONObject) {
        this.bacer401ApplicationJSONObject = bacer401ApplicationJSONObject;
        return this;
    }
    public Bacer404ApplicationJson bacer404ApplicationJSONObject;
    public BacerResponse withBacer404ApplicationJsonObject(Bacer404ApplicationJson bacer404ApplicationJSONObject) {
        this.bacer404ApplicationJSONObject = bacer404ApplicationJSONObject;
        return this;
    }
    public Bacer500ApplicationJson bacer500ApplicationJSONObject;
    public BacerResponse withBacer500ApplicationJsonObject(Bacer500ApplicationJson bacer500ApplicationJSONObject) {
        this.bacer500ApplicationJSONObject = bacer500ApplicationJSONObject;
        return this;
    }
    public Bacer502ApplicationJson bacer502ApplicationJSONObject;
    public BacerResponse withBacer502ApplicationJsonObject(Bacer502ApplicationJson bacer502ApplicationJSONObject) {
        this.bacer502ApplicationJSONObject = bacer502ApplicationJSONObject;
        return this;
    }
    public Bacer503ApplicationJson bacer503ApplicationJSONObject;
    public BacerResponse withBacer503ApplicationJsonObject(Bacer503ApplicationJson bacer503ApplicationJSONObject) {
        this.bacer503ApplicationJSONObject = bacer503ApplicationJSONObject;
        return this;
    }
    public Bacer504ApplicationJson bacer504ApplicationJSONObject;
    public BacerResponse withBacer504ApplicationJsonObject(Bacer504ApplicationJson bacer504ApplicationJSONObject) {
        this.bacer504ApplicationJSONObject = bacer504ApplicationJSONObject;
        return this;
    }
}