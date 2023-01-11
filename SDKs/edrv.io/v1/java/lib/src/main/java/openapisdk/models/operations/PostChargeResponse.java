package openapisdk.models.operations;



public class PostChargeResponse {
    public String contentType;
    public PostChargeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostChargeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostCharge200ApplicationJson postCharge200ApplicationJSONObject;
    public PostChargeResponse withPostCharge200ApplicationJsonObject(PostCharge200ApplicationJson postCharge200ApplicationJSONObject) {
        this.postCharge200ApplicationJSONObject = postCharge200ApplicationJSONObject;
        return this;
    }
}