package openapisdk.models.operations;



public class EtcerResponse {
    public String contentType;
    public EtcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EtcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Etcer400ApplicationJson etcer400ApplicationJSONObject;
    public EtcerResponse withEtcer400ApplicationJsonObject(Etcer400ApplicationJson etcer400ApplicationJSONObject) {
        this.etcer400ApplicationJSONObject = etcer400ApplicationJSONObject;
        return this;
    }
    public Etcer401ApplicationJson etcer401ApplicationJSONObject;
    public EtcerResponse withEtcer401ApplicationJsonObject(Etcer401ApplicationJson etcer401ApplicationJSONObject) {
        this.etcer401ApplicationJSONObject = etcer401ApplicationJSONObject;
        return this;
    }
    public Etcer404ApplicationJson etcer404ApplicationJSONObject;
    public EtcerResponse withEtcer404ApplicationJsonObject(Etcer404ApplicationJson etcer404ApplicationJSONObject) {
        this.etcer404ApplicationJSONObject = etcer404ApplicationJSONObject;
        return this;
    }
    public Etcer500ApplicationJson etcer500ApplicationJSONObject;
    public EtcerResponse withEtcer500ApplicationJsonObject(Etcer500ApplicationJson etcer500ApplicationJSONObject) {
        this.etcer500ApplicationJSONObject = etcer500ApplicationJSONObject;
        return this;
    }
    public Etcer502ApplicationJson etcer502ApplicationJSONObject;
    public EtcerResponse withEtcer502ApplicationJsonObject(Etcer502ApplicationJson etcer502ApplicationJSONObject) {
        this.etcer502ApplicationJSONObject = etcer502ApplicationJSONObject;
        return this;
    }
    public Etcer503ApplicationJson etcer503ApplicationJSONObject;
    public EtcerResponse withEtcer503ApplicationJsonObject(Etcer503ApplicationJson etcer503ApplicationJSONObject) {
        this.etcer503ApplicationJSONObject = etcer503ApplicationJSONObject;
        return this;
    }
    public Etcer504ApplicationJson etcer504ApplicationJSONObject;
    public EtcerResponse withEtcer504ApplicationJsonObject(Etcer504ApplicationJson etcer504ApplicationJSONObject) {
        this.etcer504ApplicationJSONObject = etcer504ApplicationJSONObject;
        return this;
    }
}