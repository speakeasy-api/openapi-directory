package openapisdk.models.operations;



public class GetLinksTopDomainsResponse {
    public String contentType;
    public GetLinksTopDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetLinksTopDomainsResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetLinksTopDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLinksTopDomains200ApplicationJson getLinksTopDomains200ApplicationJSONObject;
    public GetLinksTopDomainsResponse withGetLinksTopDomains200ApplicationJsonObject(GetLinksTopDomains200ApplicationJson getLinksTopDomains200ApplicationJSONObject) {
        this.getLinksTopDomains200ApplicationJSONObject = getLinksTopDomains200ApplicationJSONObject;
        return this;
    }
}