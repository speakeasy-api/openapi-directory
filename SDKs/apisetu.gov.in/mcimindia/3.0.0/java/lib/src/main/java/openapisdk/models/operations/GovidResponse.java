package openapisdk.models.operations;



public class GovidResponse {
    public String contentType;
    public GovidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GovidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Govid400ApplicationJson govid400ApplicationJSONObject;
    public GovidResponse withGovid400ApplicationJsonObject(Govid400ApplicationJson govid400ApplicationJSONObject) {
        this.govid400ApplicationJSONObject = govid400ApplicationJSONObject;
        return this;
    }
    public Govid401ApplicationJson govid401ApplicationJSONObject;
    public GovidResponse withGovid401ApplicationJsonObject(Govid401ApplicationJson govid401ApplicationJSONObject) {
        this.govid401ApplicationJSONObject = govid401ApplicationJSONObject;
        return this;
    }
    public Govid404ApplicationJson govid404ApplicationJSONObject;
    public GovidResponse withGovid404ApplicationJsonObject(Govid404ApplicationJson govid404ApplicationJSONObject) {
        this.govid404ApplicationJSONObject = govid404ApplicationJSONObject;
        return this;
    }
    public Govid500ApplicationJson govid500ApplicationJSONObject;
    public GovidResponse withGovid500ApplicationJsonObject(Govid500ApplicationJson govid500ApplicationJSONObject) {
        this.govid500ApplicationJSONObject = govid500ApplicationJSONObject;
        return this;
    }
    public Govid502ApplicationJson govid502ApplicationJSONObject;
    public GovidResponse withGovid502ApplicationJsonObject(Govid502ApplicationJson govid502ApplicationJSONObject) {
        this.govid502ApplicationJSONObject = govid502ApplicationJSONObject;
        return this;
    }
    public Govid503ApplicationJson govid503ApplicationJSONObject;
    public GovidResponse withGovid503ApplicationJsonObject(Govid503ApplicationJson govid503ApplicationJSONObject) {
        this.govid503ApplicationJSONObject = govid503ApplicationJSONObject;
        return this;
    }
    public Govid504ApplicationJson govid504ApplicationJSONObject;
    public GovidResponse withGovid504ApplicationJsonObject(Govid504ApplicationJson govid504ApplicationJSONObject) {
        this.govid504ApplicationJSONObject = govid504ApplicationJSONObject;
        return this;
    }
}