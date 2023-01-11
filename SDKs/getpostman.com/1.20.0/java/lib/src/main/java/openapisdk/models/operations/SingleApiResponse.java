package openapisdk.models.operations;



public class SingleApiResponse {
    public String contentType;
    public SingleApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SingleApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SingleApi200ApplicationJson singleApi200ApplicationJSONObject;
    public SingleApiResponse withSingleApi200ApplicationJsonObject(SingleApi200ApplicationJson singleApi200ApplicationJSONObject) {
        this.singleApi200ApplicationJSONObject = singleApi200ApplicationJSONObject;
        return this;
    }
}