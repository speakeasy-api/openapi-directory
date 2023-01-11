package openapisdk.models.operations;



public class AlimwResponse {
    public String contentType;
    public AlimwResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlimwResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Alimw400ApplicationJson alimw400ApplicationJSONObject;
    public AlimwResponse withAlimw400ApplicationJsonObject(Alimw400ApplicationJson alimw400ApplicationJSONObject) {
        this.alimw400ApplicationJSONObject = alimw400ApplicationJSONObject;
        return this;
    }
    public Alimw401ApplicationJson alimw401ApplicationJSONObject;
    public AlimwResponse withAlimw401ApplicationJsonObject(Alimw401ApplicationJson alimw401ApplicationJSONObject) {
        this.alimw401ApplicationJSONObject = alimw401ApplicationJSONObject;
        return this;
    }
    public Alimw404ApplicationJson alimw404ApplicationJSONObject;
    public AlimwResponse withAlimw404ApplicationJsonObject(Alimw404ApplicationJson alimw404ApplicationJSONObject) {
        this.alimw404ApplicationJSONObject = alimw404ApplicationJSONObject;
        return this;
    }
    public Alimw500ApplicationJson alimw500ApplicationJSONObject;
    public AlimwResponse withAlimw500ApplicationJsonObject(Alimw500ApplicationJson alimw500ApplicationJSONObject) {
        this.alimw500ApplicationJSONObject = alimw500ApplicationJSONObject;
        return this;
    }
    public Alimw502ApplicationJson alimw502ApplicationJSONObject;
    public AlimwResponse withAlimw502ApplicationJsonObject(Alimw502ApplicationJson alimw502ApplicationJSONObject) {
        this.alimw502ApplicationJSONObject = alimw502ApplicationJSONObject;
        return this;
    }
    public Alimw503ApplicationJson alimw503ApplicationJSONObject;
    public AlimwResponse withAlimw503ApplicationJsonObject(Alimw503ApplicationJson alimw503ApplicationJSONObject) {
        this.alimw503ApplicationJSONObject = alimw503ApplicationJSONObject;
        return this;
    }
    public Alimw504ApplicationJson alimw504ApplicationJSONObject;
    public AlimwResponse withAlimw504ApplicationJsonObject(Alimw504ApplicationJson alimw504ApplicationJSONObject) {
        this.alimw504ApplicationJSONObject = alimw504ApplicationJSONObject;
        return this;
    }
}