package openapisdk.models.operations;



public class SsmgrResponse {
    public String contentType;
    public SsmgrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SsmgrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Ssmgr400ApplicationJson ssmgr400ApplicationJSONObject;
    public SsmgrResponse withSsmgr400ApplicationJsonObject(Ssmgr400ApplicationJson ssmgr400ApplicationJSONObject) {
        this.ssmgr400ApplicationJSONObject = ssmgr400ApplicationJSONObject;
        return this;
    }
    public Ssmgr401ApplicationJson ssmgr401ApplicationJSONObject;
    public SsmgrResponse withSsmgr401ApplicationJsonObject(Ssmgr401ApplicationJson ssmgr401ApplicationJSONObject) {
        this.ssmgr401ApplicationJSONObject = ssmgr401ApplicationJSONObject;
        return this;
    }
    public Ssmgr404ApplicationJson ssmgr404ApplicationJSONObject;
    public SsmgrResponse withSsmgr404ApplicationJsonObject(Ssmgr404ApplicationJson ssmgr404ApplicationJSONObject) {
        this.ssmgr404ApplicationJSONObject = ssmgr404ApplicationJSONObject;
        return this;
    }
    public Ssmgr500ApplicationJson ssmgr500ApplicationJSONObject;
    public SsmgrResponse withSsmgr500ApplicationJsonObject(Ssmgr500ApplicationJson ssmgr500ApplicationJSONObject) {
        this.ssmgr500ApplicationJSONObject = ssmgr500ApplicationJSONObject;
        return this;
    }
    public Ssmgr502ApplicationJson ssmgr502ApplicationJSONObject;
    public SsmgrResponse withSsmgr502ApplicationJsonObject(Ssmgr502ApplicationJson ssmgr502ApplicationJSONObject) {
        this.ssmgr502ApplicationJSONObject = ssmgr502ApplicationJSONObject;
        return this;
    }
    public Ssmgr503ApplicationJson ssmgr503ApplicationJSONObject;
    public SsmgrResponse withSsmgr503ApplicationJsonObject(Ssmgr503ApplicationJson ssmgr503ApplicationJSONObject) {
        this.ssmgr503ApplicationJSONObject = ssmgr503ApplicationJSONObject;
        return this;
    }
    public Ssmgr504ApplicationJson ssmgr504ApplicationJSONObject;
    public SsmgrResponse withSsmgr504ApplicationJsonObject(Ssmgr504ApplicationJson ssmgr504ApplicationJSONObject) {
        this.ssmgr504ApplicationJSONObject = ssmgr504ApplicationJSONObject;
        return this;
    }
}