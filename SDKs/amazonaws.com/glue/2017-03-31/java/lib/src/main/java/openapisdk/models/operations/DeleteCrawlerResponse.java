package openapisdk.models.operations;



public class DeleteCrawlerResponse {
    public String contentType;
    public DeleteCrawlerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object crawlerRunningException;
    public DeleteCrawlerResponse withCrawlerRunningException(Object crawlerRunningException) {
        this.crawlerRunningException = crawlerRunningException;
        return this;
    }
    public java.util.Map<String, Object> deleteCrawlerResponse;
    public DeleteCrawlerResponse withDeleteCrawlerResponse(java.util.Map<String, Object> deleteCrawlerResponse) {
        this.deleteCrawlerResponse = deleteCrawlerResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteCrawlerResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteCrawlerResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object schedulerTransitioningException;
    public DeleteCrawlerResponse withSchedulerTransitioningException(Object schedulerTransitioningException) {
        this.schedulerTransitioningException = schedulerTransitioningException;
        return this;
    }
    public Long statusCode;
    public DeleteCrawlerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}