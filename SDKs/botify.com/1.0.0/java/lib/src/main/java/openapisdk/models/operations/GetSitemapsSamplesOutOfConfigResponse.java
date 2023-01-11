package openapisdk.models.operations;



public class GetSitemapsSamplesOutOfConfigResponse {
    public String contentType;
    public GetSitemapsSamplesOutOfConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetSitemapsSamplesOutOfConfigResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetSitemapsSamplesOutOfConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSitemapsSamplesOutOfConfig200ApplicationJson getSitemapsSamplesOutOfConfig200ApplicationJSONObject;
    public GetSitemapsSamplesOutOfConfigResponse withGetSitemapsSamplesOutOfConfig200ApplicationJsonObject(GetSitemapsSamplesOutOfConfig200ApplicationJson getSitemapsSamplesOutOfConfig200ApplicationJSONObject) {
        this.getSitemapsSamplesOutOfConfig200ApplicationJSONObject = getSitemapsSamplesOutOfConfig200ApplicationJSONObject;
        return this;
    }
}