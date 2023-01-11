package openapisdk.models.operations;



public class NchscResponse {
    public String contentType;
    public NchscResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NchscResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Nchsc400ApplicationJson nchsc400ApplicationJSONObject;
    public NchscResponse withNchsc400ApplicationJsonObject(Nchsc400ApplicationJson nchsc400ApplicationJSONObject) {
        this.nchsc400ApplicationJSONObject = nchsc400ApplicationJSONObject;
        return this;
    }
    public Nchsc401ApplicationJson nchsc401ApplicationJSONObject;
    public NchscResponse withNchsc401ApplicationJsonObject(Nchsc401ApplicationJson nchsc401ApplicationJSONObject) {
        this.nchsc401ApplicationJSONObject = nchsc401ApplicationJSONObject;
        return this;
    }
    public Nchsc404ApplicationJson nchsc404ApplicationJSONObject;
    public NchscResponse withNchsc404ApplicationJsonObject(Nchsc404ApplicationJson nchsc404ApplicationJSONObject) {
        this.nchsc404ApplicationJSONObject = nchsc404ApplicationJSONObject;
        return this;
    }
    public Nchsc500ApplicationJson nchsc500ApplicationJSONObject;
    public NchscResponse withNchsc500ApplicationJsonObject(Nchsc500ApplicationJson nchsc500ApplicationJSONObject) {
        this.nchsc500ApplicationJSONObject = nchsc500ApplicationJSONObject;
        return this;
    }
    public Nchsc502ApplicationJson nchsc502ApplicationJSONObject;
    public NchscResponse withNchsc502ApplicationJsonObject(Nchsc502ApplicationJson nchsc502ApplicationJSONObject) {
        this.nchsc502ApplicationJSONObject = nchsc502ApplicationJSONObject;
        return this;
    }
    public Nchsc503ApplicationJson nchsc503ApplicationJSONObject;
    public NchscResponse withNchsc503ApplicationJsonObject(Nchsc503ApplicationJson nchsc503ApplicationJSONObject) {
        this.nchsc503ApplicationJSONObject = nchsc503ApplicationJSONObject;
        return this;
    }
    public Nchsc504ApplicationJson nchsc504ApplicationJSONObject;
    public NchscResponse withNchsc504ApplicationJsonObject(Nchsc504ApplicationJson nchsc504ApplicationJSONObject) {
        this.nchsc504ApplicationJSONObject = nchsc504ApplicationJSONObject;
        return this;
    }
}