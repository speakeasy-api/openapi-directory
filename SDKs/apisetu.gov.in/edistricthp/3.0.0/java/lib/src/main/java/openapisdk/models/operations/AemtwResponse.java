package openapisdk.models.operations;



public class AemtwResponse {
    public String contentType;
    public AemtwResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AemtwResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Aemtw400ApplicationJson aemtw400ApplicationJSONObject;
    public AemtwResponse withAemtw400ApplicationJsonObject(Aemtw400ApplicationJson aemtw400ApplicationJSONObject) {
        this.aemtw400ApplicationJSONObject = aemtw400ApplicationJSONObject;
        return this;
    }
    public Aemtw401ApplicationJson aemtw401ApplicationJSONObject;
    public AemtwResponse withAemtw401ApplicationJsonObject(Aemtw401ApplicationJson aemtw401ApplicationJSONObject) {
        this.aemtw401ApplicationJSONObject = aemtw401ApplicationJSONObject;
        return this;
    }
    public Aemtw404ApplicationJson aemtw404ApplicationJSONObject;
    public AemtwResponse withAemtw404ApplicationJsonObject(Aemtw404ApplicationJson aemtw404ApplicationJSONObject) {
        this.aemtw404ApplicationJSONObject = aemtw404ApplicationJSONObject;
        return this;
    }
    public Aemtw500ApplicationJson aemtw500ApplicationJSONObject;
    public AemtwResponse withAemtw500ApplicationJsonObject(Aemtw500ApplicationJson aemtw500ApplicationJSONObject) {
        this.aemtw500ApplicationJSONObject = aemtw500ApplicationJSONObject;
        return this;
    }
    public Aemtw502ApplicationJson aemtw502ApplicationJSONObject;
    public AemtwResponse withAemtw502ApplicationJsonObject(Aemtw502ApplicationJson aemtw502ApplicationJSONObject) {
        this.aemtw502ApplicationJSONObject = aemtw502ApplicationJSONObject;
        return this;
    }
    public Aemtw503ApplicationJson aemtw503ApplicationJSONObject;
    public AemtwResponse withAemtw503ApplicationJsonObject(Aemtw503ApplicationJson aemtw503ApplicationJSONObject) {
        this.aemtw503ApplicationJSONObject = aemtw503ApplicationJSONObject;
        return this;
    }
    public Aemtw504ApplicationJson aemtw504ApplicationJSONObject;
    public AemtwResponse withAemtw504ApplicationJsonObject(Aemtw504ApplicationJson aemtw504ApplicationJSONObject) {
        this.aemtw504ApplicationJSONObject = aemtw504ApplicationJSONObject;
        return this;
    }
}