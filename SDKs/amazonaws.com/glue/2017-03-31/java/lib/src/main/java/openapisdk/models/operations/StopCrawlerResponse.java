package openapisdk.models.operations;



public class StopCrawlerResponse {
    public String contentType;
    public StopCrawlerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object crawlerNotRunningException;
    public StopCrawlerResponse withCrawlerNotRunningException(Object crawlerNotRunningException) {
        this.crawlerNotRunningException = crawlerNotRunningException;
        return this;
    }
    public Object crawlerStoppingException;
    public StopCrawlerResponse withCrawlerStoppingException(Object crawlerStoppingException) {
        this.crawlerStoppingException = crawlerStoppingException;
        return this;
    }
    public Object entityNotFoundException;
    public StopCrawlerResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object operationTimeoutException;
    public StopCrawlerResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public StopCrawlerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopCrawlerResponse;
    public StopCrawlerResponse withStopCrawlerResponse(java.util.Map<String, Object> stopCrawlerResponse) {
        this.stopCrawlerResponse = stopCrawlerResponse;
        return this;
    }
}