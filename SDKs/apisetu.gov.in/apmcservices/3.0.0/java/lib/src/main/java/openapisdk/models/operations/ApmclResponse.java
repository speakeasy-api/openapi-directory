package openapisdk.models.operations;



public class ApmclResponse {
    public String contentType;
    public ApmclResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApmclResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Apmcl400ApplicationJson apmcl400ApplicationJSONObject;
    public ApmclResponse withApmcl400ApplicationJsonObject(Apmcl400ApplicationJson apmcl400ApplicationJSONObject) {
        this.apmcl400ApplicationJSONObject = apmcl400ApplicationJSONObject;
        return this;
    }
    public Apmcl401ApplicationJson apmcl401ApplicationJSONObject;
    public ApmclResponse withApmcl401ApplicationJsonObject(Apmcl401ApplicationJson apmcl401ApplicationJSONObject) {
        this.apmcl401ApplicationJSONObject = apmcl401ApplicationJSONObject;
        return this;
    }
    public Apmcl404ApplicationJson apmcl404ApplicationJSONObject;
    public ApmclResponse withApmcl404ApplicationJsonObject(Apmcl404ApplicationJson apmcl404ApplicationJSONObject) {
        this.apmcl404ApplicationJSONObject = apmcl404ApplicationJSONObject;
        return this;
    }
    public Apmcl500ApplicationJson apmcl500ApplicationJSONObject;
    public ApmclResponse withApmcl500ApplicationJsonObject(Apmcl500ApplicationJson apmcl500ApplicationJSONObject) {
        this.apmcl500ApplicationJSONObject = apmcl500ApplicationJSONObject;
        return this;
    }
    public Apmcl502ApplicationJson apmcl502ApplicationJSONObject;
    public ApmclResponse withApmcl502ApplicationJsonObject(Apmcl502ApplicationJson apmcl502ApplicationJSONObject) {
        this.apmcl502ApplicationJSONObject = apmcl502ApplicationJSONObject;
        return this;
    }
    public Apmcl503ApplicationJson apmcl503ApplicationJSONObject;
    public ApmclResponse withApmcl503ApplicationJsonObject(Apmcl503ApplicationJson apmcl503ApplicationJSONObject) {
        this.apmcl503ApplicationJSONObject = apmcl503ApplicationJSONObject;
        return this;
    }
    public Apmcl504ApplicationJson apmcl504ApplicationJSONObject;
    public ApmclResponse withApmcl504ApplicationJsonObject(Apmcl504ApplicationJson apmcl504ApplicationJSONObject) {
        this.apmcl504ApplicationJSONObject = apmcl504ApplicationJSONObject;
        return this;
    }
}