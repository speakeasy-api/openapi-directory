package openapisdk.models.operations;



public class DccerResponse {
    public String contentType;
    public DccerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DccerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Dccer400ApplicationJson dccer400ApplicationJSONObject;
    public DccerResponse withDccer400ApplicationJsonObject(Dccer400ApplicationJson dccer400ApplicationJSONObject) {
        this.dccer400ApplicationJSONObject = dccer400ApplicationJSONObject;
        return this;
    }
    public Dccer401ApplicationJson dccer401ApplicationJSONObject;
    public DccerResponse withDccer401ApplicationJsonObject(Dccer401ApplicationJson dccer401ApplicationJSONObject) {
        this.dccer401ApplicationJSONObject = dccer401ApplicationJSONObject;
        return this;
    }
    public Dccer404ApplicationJson dccer404ApplicationJSONObject;
    public DccerResponse withDccer404ApplicationJsonObject(Dccer404ApplicationJson dccer404ApplicationJSONObject) {
        this.dccer404ApplicationJSONObject = dccer404ApplicationJSONObject;
        return this;
    }
    public Dccer500ApplicationJson dccer500ApplicationJSONObject;
    public DccerResponse withDccer500ApplicationJsonObject(Dccer500ApplicationJson dccer500ApplicationJSONObject) {
        this.dccer500ApplicationJSONObject = dccer500ApplicationJSONObject;
        return this;
    }
    public Dccer502ApplicationJson dccer502ApplicationJSONObject;
    public DccerResponse withDccer502ApplicationJsonObject(Dccer502ApplicationJson dccer502ApplicationJSONObject) {
        this.dccer502ApplicationJSONObject = dccer502ApplicationJSONObject;
        return this;
    }
    public Dccer503ApplicationJson dccer503ApplicationJSONObject;
    public DccerResponse withDccer503ApplicationJsonObject(Dccer503ApplicationJson dccer503ApplicationJSONObject) {
        this.dccer503ApplicationJSONObject = dccer503ApplicationJSONObject;
        return this;
    }
    public Dccer504ApplicationJson dccer504ApplicationJSONObject;
    public DccerResponse withDccer504ApplicationJsonObject(Dccer504ApplicationJson dccer504ApplicationJSONObject) {
        this.dccer504ApplicationJSONObject = dccer504ApplicationJSONObject;
        return this;
    }
}