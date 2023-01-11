package openapisdk.models.operations;



public class StartCrawlerScheduleResponse {
    public String contentType;
    public StartCrawlerScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public StartCrawlerScheduleResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object noScheduleException;
    public StartCrawlerScheduleResponse withNoScheduleException(Object noScheduleException) {
        this.noScheduleException = noScheduleException;
        return this;
    }
    public Object operationTimeoutException;
    public StartCrawlerScheduleResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object schedulerRunningException;
    public StartCrawlerScheduleResponse withSchedulerRunningException(Object schedulerRunningException) {
        this.schedulerRunningException = schedulerRunningException;
        return this;
    }
    public Object schedulerTransitioningException;
    public StartCrawlerScheduleResponse withSchedulerTransitioningException(Object schedulerTransitioningException) {
        this.schedulerTransitioningException = schedulerTransitioningException;
        return this;
    }
    public java.util.Map<String, Object> startCrawlerScheduleResponse;
    public StartCrawlerScheduleResponse withStartCrawlerScheduleResponse(java.util.Map<String, Object> startCrawlerScheduleResponse) {
        this.startCrawlerScheduleResponse = startCrawlerScheduleResponse;
        return this;
    }
    public Long statusCode;
    public StartCrawlerScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}