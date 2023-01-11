package openapisdk.models.operations;



public class GetUrlsResponse {
    public String contentType;
    public GetUrlsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetUrlsResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetUrlsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUrls200ApplicationJson getUrls200ApplicationJSONObject;
    public GetUrlsResponse withGetUrls200ApplicationJsonObject(GetUrls200ApplicationJson getUrls200ApplicationJSONObject) {
        this.getUrls200ApplicationJSONObject = getUrls200ApplicationJSONObject;
        return this;
    }
}