package openapisdk.models.operations;



public class DpicrResponse {
    public String contentType;
    public DpicrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DpicrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Dpicr400ApplicationJson dpicr400ApplicationJSONObject;
    public DpicrResponse withDpicr400ApplicationJsonObject(Dpicr400ApplicationJson dpicr400ApplicationJSONObject) {
        this.dpicr400ApplicationJSONObject = dpicr400ApplicationJSONObject;
        return this;
    }
    public Dpicr401ApplicationJson dpicr401ApplicationJSONObject;
    public DpicrResponse withDpicr401ApplicationJsonObject(Dpicr401ApplicationJson dpicr401ApplicationJSONObject) {
        this.dpicr401ApplicationJSONObject = dpicr401ApplicationJSONObject;
        return this;
    }
    public Dpicr404ApplicationJson dpicr404ApplicationJSONObject;
    public DpicrResponse withDpicr404ApplicationJsonObject(Dpicr404ApplicationJson dpicr404ApplicationJSONObject) {
        this.dpicr404ApplicationJSONObject = dpicr404ApplicationJSONObject;
        return this;
    }
    public Dpicr500ApplicationJson dpicr500ApplicationJSONObject;
    public DpicrResponse withDpicr500ApplicationJsonObject(Dpicr500ApplicationJson dpicr500ApplicationJSONObject) {
        this.dpicr500ApplicationJSONObject = dpicr500ApplicationJSONObject;
        return this;
    }
    public Dpicr502ApplicationJson dpicr502ApplicationJSONObject;
    public DpicrResponse withDpicr502ApplicationJsonObject(Dpicr502ApplicationJson dpicr502ApplicationJSONObject) {
        this.dpicr502ApplicationJSONObject = dpicr502ApplicationJSONObject;
        return this;
    }
    public Dpicr503ApplicationJson dpicr503ApplicationJSONObject;
    public DpicrResponse withDpicr503ApplicationJsonObject(Dpicr503ApplicationJson dpicr503ApplicationJSONObject) {
        this.dpicr503ApplicationJSONObject = dpicr503ApplicationJSONObject;
        return this;
    }
    public Dpicr504ApplicationJson dpicr504ApplicationJSONObject;
    public DpicrResponse withDpicr504ApplicationJsonObject(Dpicr504ApplicationJson dpicr504ApplicationJSONObject) {
        this.dpicr504ApplicationJSONObject = dpicr504ApplicationJSONObject;
        return this;
    }
}