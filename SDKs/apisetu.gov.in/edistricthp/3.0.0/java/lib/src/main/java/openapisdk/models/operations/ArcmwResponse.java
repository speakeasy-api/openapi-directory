package openapisdk.models.operations;



public class ArcmwResponse {
    public String contentType;
    public ArcmwResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArcmwResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Arcmw400ApplicationJson arcmw400ApplicationJSONObject;
    public ArcmwResponse withArcmw400ApplicationJsonObject(Arcmw400ApplicationJson arcmw400ApplicationJSONObject) {
        this.arcmw400ApplicationJSONObject = arcmw400ApplicationJSONObject;
        return this;
    }
    public Arcmw401ApplicationJson arcmw401ApplicationJSONObject;
    public ArcmwResponse withArcmw401ApplicationJsonObject(Arcmw401ApplicationJson arcmw401ApplicationJSONObject) {
        this.arcmw401ApplicationJSONObject = arcmw401ApplicationJSONObject;
        return this;
    }
    public Arcmw404ApplicationJson arcmw404ApplicationJSONObject;
    public ArcmwResponse withArcmw404ApplicationJsonObject(Arcmw404ApplicationJson arcmw404ApplicationJSONObject) {
        this.arcmw404ApplicationJSONObject = arcmw404ApplicationJSONObject;
        return this;
    }
    public Arcmw500ApplicationJson arcmw500ApplicationJSONObject;
    public ArcmwResponse withArcmw500ApplicationJsonObject(Arcmw500ApplicationJson arcmw500ApplicationJSONObject) {
        this.arcmw500ApplicationJSONObject = arcmw500ApplicationJSONObject;
        return this;
    }
    public Arcmw502ApplicationJson arcmw502ApplicationJSONObject;
    public ArcmwResponse withArcmw502ApplicationJsonObject(Arcmw502ApplicationJson arcmw502ApplicationJSONObject) {
        this.arcmw502ApplicationJSONObject = arcmw502ApplicationJSONObject;
        return this;
    }
    public Arcmw503ApplicationJson arcmw503ApplicationJSONObject;
    public ArcmwResponse withArcmw503ApplicationJsonObject(Arcmw503ApplicationJson arcmw503ApplicationJSONObject) {
        this.arcmw503ApplicationJSONObject = arcmw503ApplicationJSONObject;
        return this;
    }
    public Arcmw504ApplicationJson arcmw504ApplicationJSONObject;
    public ArcmwResponse withArcmw504ApplicationJsonObject(Arcmw504ApplicationJson arcmw504ApplicationJSONObject) {
        this.arcmw504ApplicationJSONObject = arcmw504ApplicationJSONObject;
        return this;
    }
}