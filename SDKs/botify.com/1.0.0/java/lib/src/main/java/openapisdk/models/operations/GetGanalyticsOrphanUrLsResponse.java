package openapisdk.models.operations;



public class GetGanalyticsOrphanUrLsResponse {
    public String contentType;
    public GetGanalyticsOrphanUrLsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetGanalyticsOrphanUrLsResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetGanalyticsOrphanUrLsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetGanalyticsOrphanUrLs200ApplicationJson getGanalyticsOrphanURLs200ApplicationJSONObject;
    public GetGanalyticsOrphanUrLsResponse withGetGanalyticsOrphanUrLs200ApplicationJsonObject(GetGanalyticsOrphanUrLs200ApplicationJson getGanalyticsOrphanURLs200ApplicationJSONObject) {
        this.getGanalyticsOrphanURLs200ApplicationJSONObject = getGanalyticsOrphanURLs200ApplicationJSONObject;
        return this;
    }
}