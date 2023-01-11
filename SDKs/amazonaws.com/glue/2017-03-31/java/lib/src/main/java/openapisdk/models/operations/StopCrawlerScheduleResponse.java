package openapisdk.models.operations;



public class StopCrawlerScheduleResponse {
    public String contentType;
    public StopCrawlerScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public StopCrawlerScheduleResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object operationTimeoutException;
    public StopCrawlerScheduleResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object schedulerNotRunningException;
    public StopCrawlerScheduleResponse withSchedulerNotRunningException(Object schedulerNotRunningException) {
        this.schedulerNotRunningException = schedulerNotRunningException;
        return this;
    }
    public Object schedulerTransitioningException;
    public StopCrawlerScheduleResponse withSchedulerTransitioningException(Object schedulerTransitioningException) {
        this.schedulerTransitioningException = schedulerTransitioningException;
        return this;
    }
    public Long statusCode;
    public StopCrawlerScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopCrawlerScheduleResponse;
    public StopCrawlerScheduleResponse withStopCrawlerScheduleResponse(java.util.Map<String, Object> stopCrawlerScheduleResponse) {
        this.stopCrawlerScheduleResponse = stopCrawlerScheduleResponse;
        return this;
    }
}