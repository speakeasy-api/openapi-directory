package openapisdk.models.operations;



public class PullDocumentIdResponse {
    public String contentType;
    public PullDocumentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pullDocumentId400ApplicationJSONOneOf;
    public PullDocumentIdResponse withPullDocumentId400ApplicationJsonOneOf(Object pullDocumentId400ApplicationJSONOneOf) {
        this.pullDocumentId400ApplicationJSONOneOf = pullDocumentId400ApplicationJSONOneOf;
        return this;
    }
    public PullDocumentId401ApplicationJson pullDocumentId401ApplicationJSONObject;
    public PullDocumentIdResponse withPullDocumentId401ApplicationJsonObject(PullDocumentId401ApplicationJson pullDocumentId401ApplicationJSONObject) {
        this.pullDocumentId401ApplicationJSONObject = pullDocumentId401ApplicationJSONObject;
        return this;
    }
    public PullDocumentId404ApplicationJson pullDocumentId404ApplicationJSONObject;
    public PullDocumentIdResponse withPullDocumentId404ApplicationJsonObject(PullDocumentId404ApplicationJson pullDocumentId404ApplicationJSONObject) {
        this.pullDocumentId404ApplicationJSONObject = pullDocumentId404ApplicationJSONObject;
        return this;
    }
    public Object pullDocumentId500ApplicationJSONOneOf;
    public PullDocumentIdResponse withPullDocumentId500ApplicationJsonOneOf(Object pullDocumentId500ApplicationJSONOneOf) {
        this.pullDocumentId500ApplicationJSONOneOf = pullDocumentId500ApplicationJSONOneOf;
        return this;
    }
    public Object sample;
    public PullDocumentIdResponse withSample(Object sample) {
        this.sample = sample;
        return this;
    }
    public Long statusCode;
    public PullDocumentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}