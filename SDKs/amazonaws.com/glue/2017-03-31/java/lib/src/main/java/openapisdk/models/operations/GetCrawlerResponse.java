package openapisdk.models.operations;



public class GetCrawlerResponse {
    public String contentType;
    public GetCrawlerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetCrawlerResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetCrawlerResponse getCrawlerResponse;
    public GetCrawlerResponse withGetCrawlerResponse(openapisdk.models.shared.GetCrawlerResponse getCrawlerResponse) {
        this.getCrawlerResponse = getCrawlerResponse;
        return this;
    }
    public Object operationTimeoutException;
    public GetCrawlerResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetCrawlerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}