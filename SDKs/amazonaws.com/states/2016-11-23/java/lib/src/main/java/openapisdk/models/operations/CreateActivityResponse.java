package openapisdk.models.operations;



public class CreateActivityResponse {
    public Object activityLimitExceeded;
    public CreateActivityResponse withActivityLimitExceeded(Object activityLimitExceeded) {
        this.activityLimitExceeded = activityLimitExceeded;
        return this;
    }
    public String contentType;
    public CreateActivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateActivityOutput createActivityOutput;
    public CreateActivityResponse withCreateActivityOutput(openapisdk.models.shared.CreateActivityOutput createActivityOutput) {
        this.createActivityOutput = createActivityOutput;
        return this;
    }
    public Object invalidName;
    public CreateActivityResponse withInvalidName(Object invalidName) {
        this.invalidName = invalidName;
        return this;
    }
    public Long statusCode;
    public CreateActivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTags;
    public CreateActivityResponse withTooManyTags(Object tooManyTags) {
        this.tooManyTags = tooManyTags;
        return this;
    }
}