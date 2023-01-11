package openapisdk.models.operations;



public class IsoalResponse {
    public String contentType;
    public IsoalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IsoalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Isoal400ApplicationJson isoal400ApplicationJSONObject;
    public IsoalResponse withIsoal400ApplicationJsonObject(Isoal400ApplicationJson isoal400ApplicationJSONObject) {
        this.isoal400ApplicationJSONObject = isoal400ApplicationJSONObject;
        return this;
    }
    public Isoal401ApplicationJson isoal401ApplicationJSONObject;
    public IsoalResponse withIsoal401ApplicationJsonObject(Isoal401ApplicationJson isoal401ApplicationJSONObject) {
        this.isoal401ApplicationJSONObject = isoal401ApplicationJSONObject;
        return this;
    }
    public Isoal404ApplicationJson isoal404ApplicationJSONObject;
    public IsoalResponse withIsoal404ApplicationJsonObject(Isoal404ApplicationJson isoal404ApplicationJSONObject) {
        this.isoal404ApplicationJSONObject = isoal404ApplicationJSONObject;
        return this;
    }
    public Isoal500ApplicationJson isoal500ApplicationJSONObject;
    public IsoalResponse withIsoal500ApplicationJsonObject(Isoal500ApplicationJson isoal500ApplicationJSONObject) {
        this.isoal500ApplicationJSONObject = isoal500ApplicationJSONObject;
        return this;
    }
    public Isoal502ApplicationJson isoal502ApplicationJSONObject;
    public IsoalResponse withIsoal502ApplicationJsonObject(Isoal502ApplicationJson isoal502ApplicationJSONObject) {
        this.isoal502ApplicationJSONObject = isoal502ApplicationJSONObject;
        return this;
    }
    public Isoal503ApplicationJson isoal503ApplicationJSONObject;
    public IsoalResponse withIsoal503ApplicationJsonObject(Isoal503ApplicationJson isoal503ApplicationJSONObject) {
        this.isoal503ApplicationJSONObject = isoal503ApplicationJSONObject;
        return this;
    }
    public Isoal504ApplicationJson isoal504ApplicationJSONObject;
    public IsoalResponse withIsoal504ApplicationJsonObject(Isoal504ApplicationJson isoal504ApplicationJSONObject) {
        this.isoal504ApplicationJSONObject = isoal504ApplicationJSONObject;
        return this;
    }
}