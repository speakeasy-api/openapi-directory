package openapisdk.models.operations;



public class StartCrawlerResponse {
    public String contentType;
    public StartCrawlerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object crawlerRunningException;
    public StartCrawlerResponse withCrawlerRunningException(Object crawlerRunningException) {
        this.crawlerRunningException = crawlerRunningException;
        return this;
    }
    public Object entityNotFoundException;
    public StartCrawlerResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object operationTimeoutException;
    public StartCrawlerResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public java.util.Map<String, Object> startCrawlerResponse;
    public StartCrawlerResponse withStartCrawlerResponse(java.util.Map<String, Object> startCrawlerResponse) {
        this.startCrawlerResponse = startCrawlerResponse;
        return this;
    }
    public Long statusCode;
    public StartCrawlerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}