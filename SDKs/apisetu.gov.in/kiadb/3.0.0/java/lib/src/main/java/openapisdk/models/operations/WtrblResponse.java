package openapisdk.models.operations;



public class WtrblResponse {
    public String contentType;
    public WtrblResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WtrblResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Wtrbl400ApplicationJson wtrbl400ApplicationJSONObject;
    public WtrblResponse withWtrbl400ApplicationJsonObject(Wtrbl400ApplicationJson wtrbl400ApplicationJSONObject) {
        this.wtrbl400ApplicationJSONObject = wtrbl400ApplicationJSONObject;
        return this;
    }
    public Wtrbl401ApplicationJson wtrbl401ApplicationJSONObject;
    public WtrblResponse withWtrbl401ApplicationJsonObject(Wtrbl401ApplicationJson wtrbl401ApplicationJSONObject) {
        this.wtrbl401ApplicationJSONObject = wtrbl401ApplicationJSONObject;
        return this;
    }
    public Wtrbl404ApplicationJson wtrbl404ApplicationJSONObject;
    public WtrblResponse withWtrbl404ApplicationJsonObject(Wtrbl404ApplicationJson wtrbl404ApplicationJSONObject) {
        this.wtrbl404ApplicationJSONObject = wtrbl404ApplicationJSONObject;
        return this;
    }
    public Wtrbl500ApplicationJson wtrbl500ApplicationJSONObject;
    public WtrblResponse withWtrbl500ApplicationJsonObject(Wtrbl500ApplicationJson wtrbl500ApplicationJSONObject) {
        this.wtrbl500ApplicationJSONObject = wtrbl500ApplicationJSONObject;
        return this;
    }
    public Wtrbl502ApplicationJson wtrbl502ApplicationJSONObject;
    public WtrblResponse withWtrbl502ApplicationJsonObject(Wtrbl502ApplicationJson wtrbl502ApplicationJSONObject) {
        this.wtrbl502ApplicationJSONObject = wtrbl502ApplicationJSONObject;
        return this;
    }
    public Wtrbl503ApplicationJson wtrbl503ApplicationJSONObject;
    public WtrblResponse withWtrbl503ApplicationJsonObject(Wtrbl503ApplicationJson wtrbl503ApplicationJSONObject) {
        this.wtrbl503ApplicationJSONObject = wtrbl503ApplicationJSONObject;
        return this;
    }
    public Wtrbl504ApplicationJson wtrbl504ApplicationJSONObject;
    public WtrblResponse withWtrbl504ApplicationJsonObject(Wtrbl504ApplicationJson wtrbl504ApplicationJSONObject) {
        this.wtrbl504ApplicationJSONObject = wtrbl504ApplicationJSONObject;
        return this;
    }
}