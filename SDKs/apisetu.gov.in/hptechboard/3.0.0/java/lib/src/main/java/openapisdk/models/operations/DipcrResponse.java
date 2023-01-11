package openapisdk.models.operations;



public class DipcrResponse {
    public String contentType;
    public DipcrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DipcrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Dipcr400ApplicationJson dipcr400ApplicationJSONObject;
    public DipcrResponse withDipcr400ApplicationJsonObject(Dipcr400ApplicationJson dipcr400ApplicationJSONObject) {
        this.dipcr400ApplicationJSONObject = dipcr400ApplicationJSONObject;
        return this;
    }
    public Dipcr401ApplicationJson dipcr401ApplicationJSONObject;
    public DipcrResponse withDipcr401ApplicationJsonObject(Dipcr401ApplicationJson dipcr401ApplicationJSONObject) {
        this.dipcr401ApplicationJSONObject = dipcr401ApplicationJSONObject;
        return this;
    }
    public Dipcr404ApplicationJson dipcr404ApplicationJSONObject;
    public DipcrResponse withDipcr404ApplicationJsonObject(Dipcr404ApplicationJson dipcr404ApplicationJSONObject) {
        this.dipcr404ApplicationJSONObject = dipcr404ApplicationJSONObject;
        return this;
    }
    public Dipcr500ApplicationJson dipcr500ApplicationJSONObject;
    public DipcrResponse withDipcr500ApplicationJsonObject(Dipcr500ApplicationJson dipcr500ApplicationJSONObject) {
        this.dipcr500ApplicationJSONObject = dipcr500ApplicationJSONObject;
        return this;
    }
    public Dipcr502ApplicationJson dipcr502ApplicationJSONObject;
    public DipcrResponse withDipcr502ApplicationJsonObject(Dipcr502ApplicationJson dipcr502ApplicationJSONObject) {
        this.dipcr502ApplicationJSONObject = dipcr502ApplicationJSONObject;
        return this;
    }
    public Dipcr503ApplicationJson dipcr503ApplicationJSONObject;
    public DipcrResponse withDipcr503ApplicationJsonObject(Dipcr503ApplicationJson dipcr503ApplicationJSONObject) {
        this.dipcr503ApplicationJSONObject = dipcr503ApplicationJSONObject;
        return this;
    }
    public Dipcr504ApplicationJson dipcr504ApplicationJSONObject;
    public DipcrResponse withDipcr504ApplicationJsonObject(Dipcr504ApplicationJson dipcr504ApplicationJSONObject) {
        this.dipcr504ApplicationJSONObject = dipcr504ApplicationJSONObject;
        return this;
    }
}