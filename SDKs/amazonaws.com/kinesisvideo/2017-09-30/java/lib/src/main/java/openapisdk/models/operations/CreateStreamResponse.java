package openapisdk.models.operations;



public class CreateStreamResponse {
    public Object accountStreamLimitExceededException;
    public CreateStreamResponse withAccountStreamLimitExceededException(Object accountStreamLimitExceededException) {
        this.accountStreamLimitExceededException = accountStreamLimitExceededException;
        return this;
    }
    public Object clientLimitExceededException;
    public CreateStreamResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public CreateStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateStreamOutput createStreamOutput;
    public CreateStreamResponse withCreateStreamOutput(openapisdk.models.shared.CreateStreamOutput createStreamOutput) {
        this.createStreamOutput = createStreamOutput;
        return this;
    }
    public Object deviceStreamLimitExceededException;
    public CreateStreamResponse withDeviceStreamLimitExceededException(Object deviceStreamLimitExceededException) {
        this.deviceStreamLimitExceededException = deviceStreamLimitExceededException;
        return this;
    }
    public Object invalidArgumentException;
    public CreateStreamResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidDeviceException;
    public CreateStreamResponse withInvalidDeviceException(Object invalidDeviceException) {
        this.invalidDeviceException = invalidDeviceException;
        return this;
    }
    public Object resourceInUseException;
    public CreateStreamResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public CreateStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagsPerResourceExceededLimitException;
    public CreateStreamResponse withTagsPerResourceExceededLimitException(Object tagsPerResourceExceededLimitException) {
        this.tagsPerResourceExceededLimitException = tagsPerResourceExceededLimitException;
        return this;
    }
}