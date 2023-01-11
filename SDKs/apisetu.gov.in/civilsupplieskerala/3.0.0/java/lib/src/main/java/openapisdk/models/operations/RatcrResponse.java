package openapisdk.models.operations;



public class RatcrResponse {
    public String contentType;
    public RatcrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RatcrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Ratcr400ApplicationJson ratcr400ApplicationJSONObject;
    public RatcrResponse withRatcr400ApplicationJsonObject(Ratcr400ApplicationJson ratcr400ApplicationJSONObject) {
        this.ratcr400ApplicationJSONObject = ratcr400ApplicationJSONObject;
        return this;
    }
    public Ratcr401ApplicationJson ratcr401ApplicationJSONObject;
    public RatcrResponse withRatcr401ApplicationJsonObject(Ratcr401ApplicationJson ratcr401ApplicationJSONObject) {
        this.ratcr401ApplicationJSONObject = ratcr401ApplicationJSONObject;
        return this;
    }
    public Ratcr404ApplicationJson ratcr404ApplicationJSONObject;
    public RatcrResponse withRatcr404ApplicationJsonObject(Ratcr404ApplicationJson ratcr404ApplicationJSONObject) {
        this.ratcr404ApplicationJSONObject = ratcr404ApplicationJSONObject;
        return this;
    }
    public Ratcr500ApplicationJson ratcr500ApplicationJSONObject;
    public RatcrResponse withRatcr500ApplicationJsonObject(Ratcr500ApplicationJson ratcr500ApplicationJSONObject) {
        this.ratcr500ApplicationJSONObject = ratcr500ApplicationJSONObject;
        return this;
    }
    public Ratcr502ApplicationJson ratcr502ApplicationJSONObject;
    public RatcrResponse withRatcr502ApplicationJsonObject(Ratcr502ApplicationJson ratcr502ApplicationJSONObject) {
        this.ratcr502ApplicationJSONObject = ratcr502ApplicationJSONObject;
        return this;
    }
    public Ratcr503ApplicationJson ratcr503ApplicationJSONObject;
    public RatcrResponse withRatcr503ApplicationJsonObject(Ratcr503ApplicationJson ratcr503ApplicationJSONObject) {
        this.ratcr503ApplicationJSONObject = ratcr503ApplicationJSONObject;
        return this;
    }
    public Ratcr504ApplicationJson ratcr504ApplicationJSONObject;
    public RatcrResponse withRatcr504ApplicationJsonObject(Ratcr504ApplicationJson ratcr504ApplicationJSONObject) {
        this.ratcr504ApplicationJSONObject = ratcr504ApplicationJSONObject;
        return this;
    }
}