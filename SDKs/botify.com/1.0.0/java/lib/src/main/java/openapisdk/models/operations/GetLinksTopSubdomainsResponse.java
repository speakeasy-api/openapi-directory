package openapisdk.models.operations;



public class GetLinksTopSubdomainsResponse {
    public String contentType;
    public GetLinksTopSubdomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetLinksTopSubdomainsResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetLinksTopSubdomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLinksTopSubdomains200ApplicationJson getLinksTopSubdomains200ApplicationJSONObject;
    public GetLinksTopSubdomainsResponse withGetLinksTopSubdomains200ApplicationJsonObject(GetLinksTopSubdomains200ApplicationJson getLinksTopSubdomains200ApplicationJSONObject) {
        this.getLinksTopSubdomains200ApplicationJSONObject = getLinksTopSubdomains200ApplicationJSONObject;
        return this;
    }
}