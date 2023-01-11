package openapisdk.models.operations;



public class NsescResponse {
    public String contentType;
    public NsescResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NsescResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Nsesc400ApplicationJson nsesc400ApplicationJSONObject;
    public NsescResponse withNsesc400ApplicationJsonObject(Nsesc400ApplicationJson nsesc400ApplicationJSONObject) {
        this.nsesc400ApplicationJSONObject = nsesc400ApplicationJSONObject;
        return this;
    }
    public Nsesc401ApplicationJson nsesc401ApplicationJSONObject;
    public NsescResponse withNsesc401ApplicationJsonObject(Nsesc401ApplicationJson nsesc401ApplicationJSONObject) {
        this.nsesc401ApplicationJSONObject = nsesc401ApplicationJSONObject;
        return this;
    }
    public Nsesc404ApplicationJson nsesc404ApplicationJSONObject;
    public NsescResponse withNsesc404ApplicationJsonObject(Nsesc404ApplicationJson nsesc404ApplicationJSONObject) {
        this.nsesc404ApplicationJSONObject = nsesc404ApplicationJSONObject;
        return this;
    }
    public Nsesc500ApplicationJson nsesc500ApplicationJSONObject;
    public NsescResponse withNsesc500ApplicationJsonObject(Nsesc500ApplicationJson nsesc500ApplicationJSONObject) {
        this.nsesc500ApplicationJSONObject = nsesc500ApplicationJSONObject;
        return this;
    }
    public Nsesc502ApplicationJson nsesc502ApplicationJSONObject;
    public NsescResponse withNsesc502ApplicationJsonObject(Nsesc502ApplicationJson nsesc502ApplicationJSONObject) {
        this.nsesc502ApplicationJSONObject = nsesc502ApplicationJSONObject;
        return this;
    }
    public Nsesc503ApplicationJson nsesc503ApplicationJSONObject;
    public NsescResponse withNsesc503ApplicationJsonObject(Nsesc503ApplicationJson nsesc503ApplicationJSONObject) {
        this.nsesc503ApplicationJSONObject = nsesc503ApplicationJSONObject;
        return this;
    }
    public Nsesc504ApplicationJson nsesc504ApplicationJSONObject;
    public NsescResponse withNsesc504ApplicationJsonObject(Nsesc504ApplicationJson nsesc504ApplicationJSONObject) {
        this.nsesc504ApplicationJSONObject = nsesc504ApplicationJSONObject;
        return this;
    }
}