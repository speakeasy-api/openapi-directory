package openapisdk.models.operations;



public class PostScheduleAccountUpdaterResponse {
    public String contentType;
    public PostScheduleAccountUpdaterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object scheduleAccountUpdaterResult;
    public PostScheduleAccountUpdaterResponse withScheduleAccountUpdaterResult(Object scheduleAccountUpdaterResult) {
        this.scheduleAccountUpdaterResult = scheduleAccountUpdaterResult;
        return this;
    }
    public Object serviceError;
    public PostScheduleAccountUpdaterResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostScheduleAccountUpdaterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}