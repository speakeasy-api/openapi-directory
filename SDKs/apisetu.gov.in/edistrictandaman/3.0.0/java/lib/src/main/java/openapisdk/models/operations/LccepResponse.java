package openapisdk.models.operations;



public class LccepResponse {
    public String contentType;
    public LccepResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LccepResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Lccep400ApplicationJson lccep400ApplicationJSONObject;
    public LccepResponse withLccep400ApplicationJsonObject(Lccep400ApplicationJson lccep400ApplicationJSONObject) {
        this.lccep400ApplicationJSONObject = lccep400ApplicationJSONObject;
        return this;
    }
    public Lccep401ApplicationJson lccep401ApplicationJSONObject;
    public LccepResponse withLccep401ApplicationJsonObject(Lccep401ApplicationJson lccep401ApplicationJSONObject) {
        this.lccep401ApplicationJSONObject = lccep401ApplicationJSONObject;
        return this;
    }
    public Lccep404ApplicationJson lccep404ApplicationJSONObject;
    public LccepResponse withLccep404ApplicationJsonObject(Lccep404ApplicationJson lccep404ApplicationJSONObject) {
        this.lccep404ApplicationJSONObject = lccep404ApplicationJSONObject;
        return this;
    }
    public Lccep500ApplicationJson lccep500ApplicationJSONObject;
    public LccepResponse withLccep500ApplicationJsonObject(Lccep500ApplicationJson lccep500ApplicationJSONObject) {
        this.lccep500ApplicationJSONObject = lccep500ApplicationJSONObject;
        return this;
    }
    public Lccep502ApplicationJson lccep502ApplicationJSONObject;
    public LccepResponse withLccep502ApplicationJsonObject(Lccep502ApplicationJson lccep502ApplicationJSONObject) {
        this.lccep502ApplicationJSONObject = lccep502ApplicationJSONObject;
        return this;
    }
    public Lccep503ApplicationJson lccep503ApplicationJSONObject;
    public LccepResponse withLccep503ApplicationJsonObject(Lccep503ApplicationJson lccep503ApplicationJSONObject) {
        this.lccep503ApplicationJSONObject = lccep503ApplicationJSONObject;
        return this;
    }
    public Lccep504ApplicationJson lccep504ApplicationJSONObject;
    public LccepResponse withLccep504ApplicationJsonObject(Lccep504ApplicationJson lccep504ApplicationJSONObject) {
        this.lccep504ApplicationJSONObject = lccep504ApplicationJSONObject;
        return this;
    }
}