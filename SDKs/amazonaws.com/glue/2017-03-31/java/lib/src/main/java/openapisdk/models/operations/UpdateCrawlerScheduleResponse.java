package openapisdk.models.operations;



public class UpdateCrawlerScheduleResponse {
    public String contentType;
    public UpdateCrawlerScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateCrawlerScheduleResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidInputException;
    public UpdateCrawlerScheduleResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public UpdateCrawlerScheduleResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object schedulerTransitioningException;
    public UpdateCrawlerScheduleResponse withSchedulerTransitioningException(Object schedulerTransitioningException) {
        this.schedulerTransitioningException = schedulerTransitioningException;
        return this;
    }
    public Long statusCode;
    public UpdateCrawlerScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateCrawlerScheduleResponse;
    public UpdateCrawlerScheduleResponse withUpdateCrawlerScheduleResponse(java.util.Map<String, Object> updateCrawlerScheduleResponse) {
        this.updateCrawlerScheduleResponse = updateCrawlerScheduleResponse;
        return this;
    }
    public Object versionMismatchException;
    public UpdateCrawlerScheduleResponse withVersionMismatchException(Object versionMismatchException) {
        this.versionMismatchException = versionMismatchException;
        return this;
    }
}