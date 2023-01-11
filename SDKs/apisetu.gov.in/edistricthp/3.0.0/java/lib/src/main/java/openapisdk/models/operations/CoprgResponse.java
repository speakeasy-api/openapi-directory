package openapisdk.models.operations;



public class CoprgResponse {
    public String contentType;
    public CoprgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CoprgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Coprg400ApplicationJson coprg400ApplicationJSONObject;
    public CoprgResponse withCoprg400ApplicationJsonObject(Coprg400ApplicationJson coprg400ApplicationJSONObject) {
        this.coprg400ApplicationJSONObject = coprg400ApplicationJSONObject;
        return this;
    }
    public Coprg401ApplicationJson coprg401ApplicationJSONObject;
    public CoprgResponse withCoprg401ApplicationJsonObject(Coprg401ApplicationJson coprg401ApplicationJSONObject) {
        this.coprg401ApplicationJSONObject = coprg401ApplicationJSONObject;
        return this;
    }
    public Coprg404ApplicationJson coprg404ApplicationJSONObject;
    public CoprgResponse withCoprg404ApplicationJsonObject(Coprg404ApplicationJson coprg404ApplicationJSONObject) {
        this.coprg404ApplicationJSONObject = coprg404ApplicationJSONObject;
        return this;
    }
    public Coprg500ApplicationJson coprg500ApplicationJSONObject;
    public CoprgResponse withCoprg500ApplicationJsonObject(Coprg500ApplicationJson coprg500ApplicationJSONObject) {
        this.coprg500ApplicationJSONObject = coprg500ApplicationJSONObject;
        return this;
    }
    public Coprg502ApplicationJson coprg502ApplicationJSONObject;
    public CoprgResponse withCoprg502ApplicationJsonObject(Coprg502ApplicationJson coprg502ApplicationJSONObject) {
        this.coprg502ApplicationJSONObject = coprg502ApplicationJSONObject;
        return this;
    }
    public Coprg503ApplicationJson coprg503ApplicationJSONObject;
    public CoprgResponse withCoprg503ApplicationJsonObject(Coprg503ApplicationJson coprg503ApplicationJSONObject) {
        this.coprg503ApplicationJSONObject = coprg503ApplicationJSONObject;
        return this;
    }
    public Coprg504ApplicationJson coprg504ApplicationJSONObject;
    public CoprgResponse withCoprg504ApplicationJsonObject(Coprg504ApplicationJson coprg504ApplicationJSONObject) {
        this.coprg504ApplicationJSONObject = coprg504ApplicationJSONObject;
        return this;
    }
}