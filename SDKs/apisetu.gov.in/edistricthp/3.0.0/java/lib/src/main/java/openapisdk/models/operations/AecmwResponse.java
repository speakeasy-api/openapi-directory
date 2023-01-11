package openapisdk.models.operations;



public class AecmwResponse {
    public String contentType;
    public AecmwResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AecmwResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Aecmw400ApplicationJson aecmw400ApplicationJSONObject;
    public AecmwResponse withAecmw400ApplicationJsonObject(Aecmw400ApplicationJson aecmw400ApplicationJSONObject) {
        this.aecmw400ApplicationJSONObject = aecmw400ApplicationJSONObject;
        return this;
    }
    public Aecmw401ApplicationJson aecmw401ApplicationJSONObject;
    public AecmwResponse withAecmw401ApplicationJsonObject(Aecmw401ApplicationJson aecmw401ApplicationJSONObject) {
        this.aecmw401ApplicationJSONObject = aecmw401ApplicationJSONObject;
        return this;
    }
    public Aecmw404ApplicationJson aecmw404ApplicationJSONObject;
    public AecmwResponse withAecmw404ApplicationJsonObject(Aecmw404ApplicationJson aecmw404ApplicationJSONObject) {
        this.aecmw404ApplicationJSONObject = aecmw404ApplicationJSONObject;
        return this;
    }
    public Aecmw500ApplicationJson aecmw500ApplicationJSONObject;
    public AecmwResponse withAecmw500ApplicationJsonObject(Aecmw500ApplicationJson aecmw500ApplicationJSONObject) {
        this.aecmw500ApplicationJSONObject = aecmw500ApplicationJSONObject;
        return this;
    }
    public Aecmw502ApplicationJson aecmw502ApplicationJSONObject;
    public AecmwResponse withAecmw502ApplicationJsonObject(Aecmw502ApplicationJson aecmw502ApplicationJSONObject) {
        this.aecmw502ApplicationJSONObject = aecmw502ApplicationJSONObject;
        return this;
    }
    public Aecmw503ApplicationJson aecmw503ApplicationJSONObject;
    public AecmwResponse withAecmw503ApplicationJsonObject(Aecmw503ApplicationJson aecmw503ApplicationJSONObject) {
        this.aecmw503ApplicationJSONObject = aecmw503ApplicationJSONObject;
        return this;
    }
    public Aecmw504ApplicationJson aecmw504ApplicationJSONObject;
    public AecmwResponse withAecmw504ApplicationJsonObject(Aecmw504ApplicationJson aecmw504ApplicationJSONObject) {
        this.aecmw504ApplicationJSONObject = aecmw504ApplicationJSONObject;
        return this;
    }
}