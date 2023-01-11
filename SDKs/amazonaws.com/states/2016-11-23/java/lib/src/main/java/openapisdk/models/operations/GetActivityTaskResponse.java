package openapisdk.models.operations;



public class GetActivityTaskResponse {
    public Object activityDoesNotExist;
    public GetActivityTaskResponse withActivityDoesNotExist(Object activityDoesNotExist) {
        this.activityDoesNotExist = activityDoesNotExist;
        return this;
    }
    public Object activityWorkerLimitExceeded;
    public GetActivityTaskResponse withActivityWorkerLimitExceeded(Object activityWorkerLimitExceeded) {
        this.activityWorkerLimitExceeded = activityWorkerLimitExceeded;
        return this;
    }
    public String contentType;
    public GetActivityTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetActivityTaskOutput getActivityTaskOutput;
    public GetActivityTaskResponse withGetActivityTaskOutput(openapisdk.models.shared.GetActivityTaskOutput getActivityTaskOutput) {
        this.getActivityTaskOutput = getActivityTaskOutput;
        return this;
    }
    public Object invalidArn;
    public GetActivityTaskResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Long statusCode;
    public GetActivityTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}