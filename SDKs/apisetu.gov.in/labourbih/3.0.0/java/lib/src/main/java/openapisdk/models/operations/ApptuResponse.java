package openapisdk.models.operations;



public class ApptuResponse {
    public String contentType;
    public ApptuResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApptuResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Apptu400ApplicationJson apptu400ApplicationJSONObject;
    public ApptuResponse withApptu400ApplicationJsonObject(Apptu400ApplicationJson apptu400ApplicationJSONObject) {
        this.apptu400ApplicationJSONObject = apptu400ApplicationJSONObject;
        return this;
    }
    public Apptu401ApplicationJson apptu401ApplicationJSONObject;
    public ApptuResponse withApptu401ApplicationJsonObject(Apptu401ApplicationJson apptu401ApplicationJSONObject) {
        this.apptu401ApplicationJSONObject = apptu401ApplicationJSONObject;
        return this;
    }
    public Apptu404ApplicationJson apptu404ApplicationJSONObject;
    public ApptuResponse withApptu404ApplicationJsonObject(Apptu404ApplicationJson apptu404ApplicationJSONObject) {
        this.apptu404ApplicationJSONObject = apptu404ApplicationJSONObject;
        return this;
    }
    public Apptu500ApplicationJson apptu500ApplicationJSONObject;
    public ApptuResponse withApptu500ApplicationJsonObject(Apptu500ApplicationJson apptu500ApplicationJSONObject) {
        this.apptu500ApplicationJSONObject = apptu500ApplicationJSONObject;
        return this;
    }
    public Apptu502ApplicationJson apptu502ApplicationJSONObject;
    public ApptuResponse withApptu502ApplicationJsonObject(Apptu502ApplicationJson apptu502ApplicationJSONObject) {
        this.apptu502ApplicationJSONObject = apptu502ApplicationJSONObject;
        return this;
    }
    public Apptu503ApplicationJson apptu503ApplicationJSONObject;
    public ApptuResponse withApptu503ApplicationJsonObject(Apptu503ApplicationJson apptu503ApplicationJSONObject) {
        this.apptu503ApplicationJSONObject = apptu503ApplicationJSONObject;
        return this;
    }
    public Apptu504ApplicationJson apptu504ApplicationJSONObject;
    public ApptuResponse withApptu504ApplicationJsonObject(Apptu504ApplicationJson apptu504ApplicationJSONObject) {
        this.apptu504ApplicationJSONObject = apptu504ApplicationJSONObject;
        return this;
    }
}