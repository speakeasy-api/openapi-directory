package openapisdk.models.operations;



public class GetSearchV1ScrapeResponse {
    public byte[] body;
    public GetSearchV1ScrapeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSearchV1ScrapeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public GetSearchV1ScrapeResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ScrapeResult scrapeResult;
    public GetSearchV1ScrapeResponse withScrapeResult(openapisdk.models.shared.ScrapeResult scrapeResult) {
        this.scrapeResult = scrapeResult;
        return this;
    }
    public Long statusCode;
    public GetSearchV1ScrapeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}