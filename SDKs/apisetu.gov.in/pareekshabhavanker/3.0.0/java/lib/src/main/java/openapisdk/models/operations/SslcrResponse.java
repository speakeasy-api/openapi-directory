package openapisdk.models.operations;



public class SslcrResponse {
    public String contentType;
    public SslcrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SslcrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Sslcr400ApplicationJson sslcr400ApplicationJSONObject;
    public SslcrResponse withSslcr400ApplicationJsonObject(Sslcr400ApplicationJson sslcr400ApplicationJSONObject) {
        this.sslcr400ApplicationJSONObject = sslcr400ApplicationJSONObject;
        return this;
    }
    public Sslcr401ApplicationJson sslcr401ApplicationJSONObject;
    public SslcrResponse withSslcr401ApplicationJsonObject(Sslcr401ApplicationJson sslcr401ApplicationJSONObject) {
        this.sslcr401ApplicationJSONObject = sslcr401ApplicationJSONObject;
        return this;
    }
    public Sslcr404ApplicationJson sslcr404ApplicationJSONObject;
    public SslcrResponse withSslcr404ApplicationJsonObject(Sslcr404ApplicationJson sslcr404ApplicationJSONObject) {
        this.sslcr404ApplicationJSONObject = sslcr404ApplicationJSONObject;
        return this;
    }
    public Sslcr500ApplicationJson sslcr500ApplicationJSONObject;
    public SslcrResponse withSslcr500ApplicationJsonObject(Sslcr500ApplicationJson sslcr500ApplicationJSONObject) {
        this.sslcr500ApplicationJSONObject = sslcr500ApplicationJSONObject;
        return this;
    }
    public Sslcr502ApplicationJson sslcr502ApplicationJSONObject;
    public SslcrResponse withSslcr502ApplicationJsonObject(Sslcr502ApplicationJson sslcr502ApplicationJSONObject) {
        this.sslcr502ApplicationJSONObject = sslcr502ApplicationJSONObject;
        return this;
    }
    public Sslcr503ApplicationJson sslcr503ApplicationJSONObject;
    public SslcrResponse withSslcr503ApplicationJsonObject(Sslcr503ApplicationJson sslcr503ApplicationJSONObject) {
        this.sslcr503ApplicationJSONObject = sslcr503ApplicationJSONObject;
        return this;
    }
    public Sslcr504ApplicationJson sslcr504ApplicationJSONObject;
    public SslcrResponse withSslcr504ApplicationJsonObject(Sslcr504ApplicationJson sslcr504ApplicationJSONObject) {
        this.sslcr504ApplicationJSONObject = sslcr504ApplicationJSONObject;
        return this;
    }
}