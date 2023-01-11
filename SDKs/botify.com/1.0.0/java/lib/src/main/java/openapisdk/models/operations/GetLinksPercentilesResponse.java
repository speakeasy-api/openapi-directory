package openapisdk.models.operations;



public class GetLinksPercentilesResponse {
    public String contentType;
    public GetLinksPercentilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetLinksPercentilesResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public openapisdk.models.shared.LinksPercentiles linksPercentiles;
    public GetLinksPercentilesResponse withLinksPercentiles(openapisdk.models.shared.LinksPercentiles linksPercentiles) {
        this.linksPercentiles = linksPercentiles;
        return this;
    }
    public Long statusCode;
    public GetLinksPercentilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}