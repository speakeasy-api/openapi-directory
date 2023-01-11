package openapisdk.models.operations;



public class HsmgrResponse {
    public String contentType;
    public HsmgrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HsmgrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Hsmgr400ApplicationJson hsmgr400ApplicationJSONObject;
    public HsmgrResponse withHsmgr400ApplicationJsonObject(Hsmgr400ApplicationJson hsmgr400ApplicationJSONObject) {
        this.hsmgr400ApplicationJSONObject = hsmgr400ApplicationJSONObject;
        return this;
    }
    public Hsmgr401ApplicationJson hsmgr401ApplicationJSONObject;
    public HsmgrResponse withHsmgr401ApplicationJsonObject(Hsmgr401ApplicationJson hsmgr401ApplicationJSONObject) {
        this.hsmgr401ApplicationJSONObject = hsmgr401ApplicationJSONObject;
        return this;
    }
    public Hsmgr404ApplicationJson hsmgr404ApplicationJSONObject;
    public HsmgrResponse withHsmgr404ApplicationJsonObject(Hsmgr404ApplicationJson hsmgr404ApplicationJSONObject) {
        this.hsmgr404ApplicationJSONObject = hsmgr404ApplicationJSONObject;
        return this;
    }
    public Hsmgr500ApplicationJson hsmgr500ApplicationJSONObject;
    public HsmgrResponse withHsmgr500ApplicationJsonObject(Hsmgr500ApplicationJson hsmgr500ApplicationJSONObject) {
        this.hsmgr500ApplicationJSONObject = hsmgr500ApplicationJSONObject;
        return this;
    }
    public Hsmgr502ApplicationJson hsmgr502ApplicationJSONObject;
    public HsmgrResponse withHsmgr502ApplicationJsonObject(Hsmgr502ApplicationJson hsmgr502ApplicationJSONObject) {
        this.hsmgr502ApplicationJSONObject = hsmgr502ApplicationJSONObject;
        return this;
    }
    public Hsmgr503ApplicationJson hsmgr503ApplicationJSONObject;
    public HsmgrResponse withHsmgr503ApplicationJsonObject(Hsmgr503ApplicationJson hsmgr503ApplicationJSONObject) {
        this.hsmgr503ApplicationJSONObject = hsmgr503ApplicationJSONObject;
        return this;
    }
    public Hsmgr504ApplicationJson hsmgr504ApplicationJSONObject;
    public HsmgrResponse withHsmgr504ApplicationJsonObject(Hsmgr504ApplicationJson hsmgr504ApplicationJSONObject) {
        this.hsmgr504ApplicationJSONObject = hsmgr504ApplicationJSONObject;
        return this;
    }
}