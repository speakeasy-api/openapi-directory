package openapisdk.models.operations;



public class RitinResponse {
    public String contentType;
    public RitinResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RitinResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Ritin400ApplicationJson ritin400ApplicationJSONObject;
    public RitinResponse withRitin400ApplicationJsonObject(Ritin400ApplicationJson ritin400ApplicationJSONObject) {
        this.ritin400ApplicationJSONObject = ritin400ApplicationJSONObject;
        return this;
    }
    public Ritin401ApplicationJson ritin401ApplicationJSONObject;
    public RitinResponse withRitin401ApplicationJsonObject(Ritin401ApplicationJson ritin401ApplicationJSONObject) {
        this.ritin401ApplicationJSONObject = ritin401ApplicationJSONObject;
        return this;
    }
    public Ritin404ApplicationJson ritin404ApplicationJSONObject;
    public RitinResponse withRitin404ApplicationJsonObject(Ritin404ApplicationJson ritin404ApplicationJSONObject) {
        this.ritin404ApplicationJSONObject = ritin404ApplicationJSONObject;
        return this;
    }
    public Ritin500ApplicationJson ritin500ApplicationJSONObject;
    public RitinResponse withRitin500ApplicationJsonObject(Ritin500ApplicationJson ritin500ApplicationJSONObject) {
        this.ritin500ApplicationJSONObject = ritin500ApplicationJSONObject;
        return this;
    }
    public Ritin502ApplicationJson ritin502ApplicationJSONObject;
    public RitinResponse withRitin502ApplicationJsonObject(Ritin502ApplicationJson ritin502ApplicationJSONObject) {
        this.ritin502ApplicationJSONObject = ritin502ApplicationJSONObject;
        return this;
    }
    public Ritin503ApplicationJson ritin503ApplicationJSONObject;
    public RitinResponse withRitin503ApplicationJsonObject(Ritin503ApplicationJson ritin503ApplicationJSONObject) {
        this.ritin503ApplicationJSONObject = ritin503ApplicationJSONObject;
        return this;
    }
    public Ritin504ApplicationJson ritin504ApplicationJSONObject;
    public RitinResponse withRitin504ApplicationJsonObject(Ritin504ApplicationJson ritin504ApplicationJSONObject) {
        this.ritin504ApplicationJSONObject = ritin504ApplicationJSONObject;
        return this;
    }
}