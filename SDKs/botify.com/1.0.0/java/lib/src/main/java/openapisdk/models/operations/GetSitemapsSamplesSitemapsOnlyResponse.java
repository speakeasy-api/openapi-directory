package openapisdk.models.operations;



public class GetSitemapsSamplesSitemapsOnlyResponse {
    public String contentType;
    public GetSitemapsSamplesSitemapsOnlyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetSitemapsSamplesSitemapsOnlyResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetSitemapsSamplesSitemapsOnlyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSitemapsSamplesSitemapsOnly200ApplicationJson getSitemapsSamplesSitemapsOnly200ApplicationJSONObject;
    public GetSitemapsSamplesSitemapsOnlyResponse withGetSitemapsSamplesSitemapsOnly200ApplicationJsonObject(GetSitemapsSamplesSitemapsOnly200ApplicationJson getSitemapsSamplesSitemapsOnly200ApplicationJSONObject) {
        this.getSitemapsSamplesSitemapsOnly200ApplicationJSONObject = getSitemapsSamplesSitemapsOnly200ApplicationJSONObject;
        return this;
    }
}