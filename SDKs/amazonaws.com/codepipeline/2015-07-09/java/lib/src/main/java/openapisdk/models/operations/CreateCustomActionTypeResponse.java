package openapisdk.models.operations;



public class CreateCustomActionTypeResponse {
    public Object concurrentModificationException;
    public CreateCustomActionTypeResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateCustomActionTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCustomActionTypeOutput createCustomActionTypeOutput;
    public CreateCustomActionTypeResponse withCreateCustomActionTypeOutput(openapisdk.models.shared.CreateCustomActionTypeOutput createCustomActionTypeOutput) {
        this.createCustomActionTypeOutput = createCustomActionTypeOutput;
        return this;
    }
    public Object invalidTagsException;
    public CreateCustomActionTypeResponse withInvalidTagsException(Object invalidTagsException) {
        this.invalidTagsException = invalidTagsException;
        return this;
    }
    public Object limitExceededException;
    public CreateCustomActionTypeResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateCustomActionTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public CreateCustomActionTypeResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
    public Object validationException;
    public CreateCustomActionTypeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}