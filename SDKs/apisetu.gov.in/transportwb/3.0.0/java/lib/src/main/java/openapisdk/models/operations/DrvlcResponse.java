package openapisdk.models.operations;



public class DrvlcResponse {
    public byte[] body;
    public DrvlcResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DrvlcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DrvlcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Drvlc400ApplicationJson drvlc400ApplicationJSONObject;
    public DrvlcResponse withDrvlc400ApplicationJsonObject(Drvlc400ApplicationJson drvlc400ApplicationJSONObject) {
        this.drvlc400ApplicationJSONObject = drvlc400ApplicationJSONObject;
        return this;
    }
    public Drvlc401ApplicationJson drvlc401ApplicationJSONObject;
    public DrvlcResponse withDrvlc401ApplicationJsonObject(Drvlc401ApplicationJson drvlc401ApplicationJSONObject) {
        this.drvlc401ApplicationJSONObject = drvlc401ApplicationJSONObject;
        return this;
    }
    public Drvlc404ApplicationJson drvlc404ApplicationJSONObject;
    public DrvlcResponse withDrvlc404ApplicationJsonObject(Drvlc404ApplicationJson drvlc404ApplicationJSONObject) {
        this.drvlc404ApplicationJSONObject = drvlc404ApplicationJSONObject;
        return this;
    }
    public Drvlc500ApplicationJson drvlc500ApplicationJSONObject;
    public DrvlcResponse withDrvlc500ApplicationJsonObject(Drvlc500ApplicationJson drvlc500ApplicationJSONObject) {
        this.drvlc500ApplicationJSONObject = drvlc500ApplicationJSONObject;
        return this;
    }
    public Drvlc502ApplicationJson drvlc502ApplicationJSONObject;
    public DrvlcResponse withDrvlc502ApplicationJsonObject(Drvlc502ApplicationJson drvlc502ApplicationJSONObject) {
        this.drvlc502ApplicationJSONObject = drvlc502ApplicationJSONObject;
        return this;
    }
    public Drvlc503ApplicationJson drvlc503ApplicationJSONObject;
    public DrvlcResponse withDrvlc503ApplicationJsonObject(Drvlc503ApplicationJson drvlc503ApplicationJSONObject) {
        this.drvlc503ApplicationJSONObject = drvlc503ApplicationJSONObject;
        return this;
    }
    public Drvlc504ApplicationJson drvlc504ApplicationJSONObject;
    public DrvlcResponse withDrvlc504ApplicationJsonObject(Drvlc504ApplicationJson drvlc504ApplicationJSONObject) {
        this.drvlc504ApplicationJSONObject = drvlc504ApplicationJSONObject;
        return this;
    }
}