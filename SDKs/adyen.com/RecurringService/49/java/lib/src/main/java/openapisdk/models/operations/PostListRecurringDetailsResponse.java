package openapisdk.models.operations;



public class PostListRecurringDetailsResponse {
    public String contentType;
    public PostListRecurringDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object recurringDetailsResult;
    public PostListRecurringDetailsResponse withRecurringDetailsResult(Object recurringDetailsResult) {
        this.recurringDetailsResult = recurringDetailsResult;
        return this;
    }
    public Object serviceError;
    public PostListRecurringDetailsResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostListRecurringDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}