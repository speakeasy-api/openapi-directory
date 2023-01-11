package openapisdk.models.operations;



public class CreateApplicationResponse {
    public Object codeValidationException;
    public CreateApplicationResponse withCodeValidationException(Object codeValidationException) {
        this.codeValidationException = codeValidationException;
        return this;
    }
    public Object concurrentModificationException;
    public CreateApplicationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateApplicationResponse createApplicationResponse;
    public CreateApplicationResponse withCreateApplicationResponse(openapisdk.models.shared.CreateApplicationResponse createApplicationResponse) {
        this.createApplicationResponse = createApplicationResponse;
        return this;
    }
    public Object invalidArgumentException;
    public CreateApplicationResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidRequestException;
    public CreateApplicationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateApplicationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public CreateApplicationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public CreateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public CreateApplicationResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}