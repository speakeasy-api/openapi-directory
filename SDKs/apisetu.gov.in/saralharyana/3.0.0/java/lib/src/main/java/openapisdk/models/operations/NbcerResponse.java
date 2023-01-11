package openapisdk.models.operations;



public class NbcerResponse {
    public String contentType;
    public NbcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NbcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Nbcer400ApplicationJson nbcer400ApplicationJSONObject;
    public NbcerResponse withNbcer400ApplicationJsonObject(Nbcer400ApplicationJson nbcer400ApplicationJSONObject) {
        this.nbcer400ApplicationJSONObject = nbcer400ApplicationJSONObject;
        return this;
    }
    public Nbcer401ApplicationJson nbcer401ApplicationJSONObject;
    public NbcerResponse withNbcer401ApplicationJsonObject(Nbcer401ApplicationJson nbcer401ApplicationJSONObject) {
        this.nbcer401ApplicationJSONObject = nbcer401ApplicationJSONObject;
        return this;
    }
    public Nbcer404ApplicationJson nbcer404ApplicationJSONObject;
    public NbcerResponse withNbcer404ApplicationJsonObject(Nbcer404ApplicationJson nbcer404ApplicationJSONObject) {
        this.nbcer404ApplicationJSONObject = nbcer404ApplicationJSONObject;
        return this;
    }
    public Nbcer500ApplicationJson nbcer500ApplicationJSONObject;
    public NbcerResponse withNbcer500ApplicationJsonObject(Nbcer500ApplicationJson nbcer500ApplicationJSONObject) {
        this.nbcer500ApplicationJSONObject = nbcer500ApplicationJSONObject;
        return this;
    }
    public Nbcer502ApplicationJson nbcer502ApplicationJSONObject;
    public NbcerResponse withNbcer502ApplicationJsonObject(Nbcer502ApplicationJson nbcer502ApplicationJSONObject) {
        this.nbcer502ApplicationJSONObject = nbcer502ApplicationJSONObject;
        return this;
    }
    public Nbcer503ApplicationJson nbcer503ApplicationJSONObject;
    public NbcerResponse withNbcer503ApplicationJsonObject(Nbcer503ApplicationJson nbcer503ApplicationJSONObject) {
        this.nbcer503ApplicationJSONObject = nbcer503ApplicationJSONObject;
        return this;
    }
    public Nbcer504ApplicationJson nbcer504ApplicationJSONObject;
    public NbcerResponse withNbcer504ApplicationJsonObject(Nbcer504ApplicationJson nbcer504ApplicationJSONObject) {
        this.nbcer504ApplicationJSONObject = nbcer504ApplicationJSONObject;
        return this;
    }
}