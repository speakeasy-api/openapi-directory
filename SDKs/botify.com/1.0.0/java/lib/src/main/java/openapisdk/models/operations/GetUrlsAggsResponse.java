package openapisdk.models.operations;



public class GetUrlsAggsResponse {
    public String contentType;
    public GetUrlsAggsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetUrlsAggsResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetUrlsAggsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] getUrlsAggs200ApplicationJSONAnies;
    public GetUrlsAggsResponse withGetUrlsAggs200ApplicationJsonAnies(Object[] getUrlsAggs200ApplicationJSONAnies) {
        this.getUrlsAggs200ApplicationJSONAnies = getUrlsAggs200ApplicationJSONAnies;
        return this;
    }
}