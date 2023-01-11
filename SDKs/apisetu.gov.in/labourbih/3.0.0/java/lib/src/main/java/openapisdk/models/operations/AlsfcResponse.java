package openapisdk.models.operations;



public class AlsfcResponse {
    public String contentType;
    public AlsfcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlsfcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Alsfc400ApplicationJson alsfc400ApplicationJSONObject;
    public AlsfcResponse withAlsfc400ApplicationJsonObject(Alsfc400ApplicationJson alsfc400ApplicationJSONObject) {
        this.alsfc400ApplicationJSONObject = alsfc400ApplicationJSONObject;
        return this;
    }
    public Alsfc401ApplicationJson alsfc401ApplicationJSONObject;
    public AlsfcResponse withAlsfc401ApplicationJsonObject(Alsfc401ApplicationJson alsfc401ApplicationJSONObject) {
        this.alsfc401ApplicationJSONObject = alsfc401ApplicationJSONObject;
        return this;
    }
    public Alsfc404ApplicationJson alsfc404ApplicationJSONObject;
    public AlsfcResponse withAlsfc404ApplicationJsonObject(Alsfc404ApplicationJson alsfc404ApplicationJSONObject) {
        this.alsfc404ApplicationJSONObject = alsfc404ApplicationJSONObject;
        return this;
    }
    public Alsfc500ApplicationJson alsfc500ApplicationJSONObject;
    public AlsfcResponse withAlsfc500ApplicationJsonObject(Alsfc500ApplicationJson alsfc500ApplicationJSONObject) {
        this.alsfc500ApplicationJSONObject = alsfc500ApplicationJSONObject;
        return this;
    }
    public Alsfc502ApplicationJson alsfc502ApplicationJSONObject;
    public AlsfcResponse withAlsfc502ApplicationJsonObject(Alsfc502ApplicationJson alsfc502ApplicationJSONObject) {
        this.alsfc502ApplicationJSONObject = alsfc502ApplicationJSONObject;
        return this;
    }
    public Alsfc503ApplicationJson alsfc503ApplicationJSONObject;
    public AlsfcResponse withAlsfc503ApplicationJsonObject(Alsfc503ApplicationJson alsfc503ApplicationJSONObject) {
        this.alsfc503ApplicationJSONObject = alsfc503ApplicationJSONObject;
        return this;
    }
    public Alsfc504ApplicationJson alsfc504ApplicationJSONObject;
    public AlsfcResponse withAlsfc504ApplicationJsonObject(Alsfc504ApplicationJson alsfc504ApplicationJSONObject) {
        this.alsfc504ApplicationJSONObject = alsfc504ApplicationJSONObject;
        return this;
    }
}