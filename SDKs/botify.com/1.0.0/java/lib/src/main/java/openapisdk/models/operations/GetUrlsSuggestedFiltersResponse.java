package openapisdk.models.operations;



public class GetUrlsSuggestedFiltersResponse {
    public String contentType;
    public GetUrlsSuggestedFiltersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetUrlsSuggestedFiltersResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetUrlsSuggestedFiltersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UrlsAggsQuery urlsAggsQuery;
    public GetUrlsSuggestedFiltersResponse withUrlsAggsQuery(openapisdk.models.shared.UrlsAggsQuery urlsAggsQuery) {
        this.urlsAggsQuery = urlsAggsQuery;
        return this;
    }
}