package openapisdk.models.operations;



public class LabrpResponse {
    public String contentType;
    public LabrpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LabrpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Labrp400ApplicationJson labrp400ApplicationJSONObject;
    public LabrpResponse withLabrp400ApplicationJsonObject(Labrp400ApplicationJson labrp400ApplicationJSONObject) {
        this.labrp400ApplicationJSONObject = labrp400ApplicationJSONObject;
        return this;
    }
    public Labrp401ApplicationJson labrp401ApplicationJSONObject;
    public LabrpResponse withLabrp401ApplicationJsonObject(Labrp401ApplicationJson labrp401ApplicationJSONObject) {
        this.labrp401ApplicationJSONObject = labrp401ApplicationJSONObject;
        return this;
    }
    public Labrp404ApplicationJson labrp404ApplicationJSONObject;
    public LabrpResponse withLabrp404ApplicationJsonObject(Labrp404ApplicationJson labrp404ApplicationJSONObject) {
        this.labrp404ApplicationJSONObject = labrp404ApplicationJSONObject;
        return this;
    }
    public Labrp500ApplicationJson labrp500ApplicationJSONObject;
    public LabrpResponse withLabrp500ApplicationJsonObject(Labrp500ApplicationJson labrp500ApplicationJSONObject) {
        this.labrp500ApplicationJSONObject = labrp500ApplicationJSONObject;
        return this;
    }
    public Labrp502ApplicationJson labrp502ApplicationJSONObject;
    public LabrpResponse withLabrp502ApplicationJsonObject(Labrp502ApplicationJson labrp502ApplicationJSONObject) {
        this.labrp502ApplicationJSONObject = labrp502ApplicationJSONObject;
        return this;
    }
    public Labrp503ApplicationJson labrp503ApplicationJSONObject;
    public LabrpResponse withLabrp503ApplicationJsonObject(Labrp503ApplicationJson labrp503ApplicationJSONObject) {
        this.labrp503ApplicationJSONObject = labrp503ApplicationJSONObject;
        return this;
    }
    public Labrp504ApplicationJson labrp504ApplicationJSONObject;
    public LabrpResponse withLabrp504ApplicationJsonObject(Labrp504ApplicationJson labrp504ApplicationJSONObject) {
        this.labrp504ApplicationJSONObject = labrp504ApplicationJSONObject;
        return this;
    }
}