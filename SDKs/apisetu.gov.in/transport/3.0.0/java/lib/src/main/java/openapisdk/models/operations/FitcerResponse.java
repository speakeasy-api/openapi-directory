package openapisdk.models.operations;



public class FitcerResponse {
    public byte[] body;
    public FitcerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public FitcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FitcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Fitcer400ApplicationJson fitcer400ApplicationJSONObject;
    public FitcerResponse withFitcer400ApplicationJsonObject(Fitcer400ApplicationJson fitcer400ApplicationJSONObject) {
        this.fitcer400ApplicationJSONObject = fitcer400ApplicationJSONObject;
        return this;
    }
    public Fitcer401ApplicationJson fitcer401ApplicationJSONObject;
    public FitcerResponse withFitcer401ApplicationJsonObject(Fitcer401ApplicationJson fitcer401ApplicationJSONObject) {
        this.fitcer401ApplicationJSONObject = fitcer401ApplicationJSONObject;
        return this;
    }
    public Fitcer404ApplicationJson fitcer404ApplicationJSONObject;
    public FitcerResponse withFitcer404ApplicationJsonObject(Fitcer404ApplicationJson fitcer404ApplicationJSONObject) {
        this.fitcer404ApplicationJSONObject = fitcer404ApplicationJSONObject;
        return this;
    }
    public Fitcer500ApplicationJson fitcer500ApplicationJSONObject;
    public FitcerResponse withFitcer500ApplicationJsonObject(Fitcer500ApplicationJson fitcer500ApplicationJSONObject) {
        this.fitcer500ApplicationJSONObject = fitcer500ApplicationJSONObject;
        return this;
    }
    public Fitcer502ApplicationJson fitcer502ApplicationJSONObject;
    public FitcerResponse withFitcer502ApplicationJsonObject(Fitcer502ApplicationJson fitcer502ApplicationJSONObject) {
        this.fitcer502ApplicationJSONObject = fitcer502ApplicationJSONObject;
        return this;
    }
    public Fitcer503ApplicationJson fitcer503ApplicationJSONObject;
    public FitcerResponse withFitcer503ApplicationJsonObject(Fitcer503ApplicationJson fitcer503ApplicationJSONObject) {
        this.fitcer503ApplicationJSONObject = fitcer503ApplicationJSONObject;
        return this;
    }
    public Fitcer504ApplicationJson fitcer504ApplicationJSONObject;
    public FitcerResponse withFitcer504ApplicationJsonObject(Fitcer504ApplicationJson fitcer504ApplicationJSONObject) {
        this.fitcer504ApplicationJSONObject = fitcer504ApplicationJSONObject;
        return this;
    }
}