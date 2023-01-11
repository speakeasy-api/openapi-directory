package openapisdk.models.operations;



public class PollForActivityTaskResponse {
    public openapisdk.models.shared.ActivityTask activityTask;
    public PollForActivityTaskResponse withActivityTask(openapisdk.models.shared.ActivityTask activityTask) {
        this.activityTask = activityTask;
        return this;
    }
    public String contentType;
    public PollForActivityTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededFault;
    public PollForActivityTaskResponse withLimitExceededFault(Object limitExceededFault) {
        this.limitExceededFault = limitExceededFault;
        return this;
    }
    public Object operationNotPermittedFault;
    public PollForActivityTaskResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public PollForActivityTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public PollForActivityTaskResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}