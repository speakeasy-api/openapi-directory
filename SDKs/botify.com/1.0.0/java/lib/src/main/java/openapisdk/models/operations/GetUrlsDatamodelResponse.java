package openapisdk.models.operations;



public class GetUrlsDatamodelResponse {
    public String contentType;
    public GetUrlsDatamodelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CrawlDatamodel crawlDatamodel;
    public GetUrlsDatamodelResponse withCrawlDatamodel(openapisdk.models.shared.CrawlDatamodel crawlDatamodel) {
        this.crawlDatamodel = crawlDatamodel;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetUrlsDatamodelResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetUrlsDatamodelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}