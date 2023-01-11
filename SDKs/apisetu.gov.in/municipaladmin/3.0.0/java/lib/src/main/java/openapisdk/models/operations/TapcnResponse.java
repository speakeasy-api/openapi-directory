package openapisdk.models.operations;



public class TapcnResponse {
    public String contentType;
    public TapcnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TapcnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Tapcn400ApplicationJson tapcn400ApplicationJSONObject;
    public TapcnResponse withTapcn400ApplicationJsonObject(Tapcn400ApplicationJson tapcn400ApplicationJSONObject) {
        this.tapcn400ApplicationJSONObject = tapcn400ApplicationJSONObject;
        return this;
    }
    public Tapcn401ApplicationJson tapcn401ApplicationJSONObject;
    public TapcnResponse withTapcn401ApplicationJsonObject(Tapcn401ApplicationJson tapcn401ApplicationJSONObject) {
        this.tapcn401ApplicationJSONObject = tapcn401ApplicationJSONObject;
        return this;
    }
    public Tapcn404ApplicationJson tapcn404ApplicationJSONObject;
    public TapcnResponse withTapcn404ApplicationJsonObject(Tapcn404ApplicationJson tapcn404ApplicationJSONObject) {
        this.tapcn404ApplicationJSONObject = tapcn404ApplicationJSONObject;
        return this;
    }
    public Tapcn500ApplicationJson tapcn500ApplicationJSONObject;
    public TapcnResponse withTapcn500ApplicationJsonObject(Tapcn500ApplicationJson tapcn500ApplicationJSONObject) {
        this.tapcn500ApplicationJSONObject = tapcn500ApplicationJSONObject;
        return this;
    }
    public Tapcn502ApplicationJson tapcn502ApplicationJSONObject;
    public TapcnResponse withTapcn502ApplicationJsonObject(Tapcn502ApplicationJson tapcn502ApplicationJSONObject) {
        this.tapcn502ApplicationJSONObject = tapcn502ApplicationJSONObject;
        return this;
    }
    public Tapcn503ApplicationJson tapcn503ApplicationJSONObject;
    public TapcnResponse withTapcn503ApplicationJsonObject(Tapcn503ApplicationJson tapcn503ApplicationJSONObject) {
        this.tapcn503ApplicationJSONObject = tapcn503ApplicationJSONObject;
        return this;
    }
    public Tapcn504ApplicationJson tapcn504ApplicationJSONObject;
    public TapcnResponse withTapcn504ApplicationJsonObject(Tapcn504ApplicationJson tapcn504ApplicationJSONObject) {
        this.tapcn504ApplicationJSONObject = tapcn504ApplicationJSONObject;
        return this;
    }
}