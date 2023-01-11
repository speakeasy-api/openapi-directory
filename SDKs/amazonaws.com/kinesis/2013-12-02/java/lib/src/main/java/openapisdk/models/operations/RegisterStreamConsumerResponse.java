package openapisdk.models.operations;



public class RegisterStreamConsumerResponse {
    public String contentType;
    public RegisterStreamConsumerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public RegisterStreamConsumerResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public RegisterStreamConsumerResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.RegisterStreamConsumerOutput registerStreamConsumerOutput;
    public RegisterStreamConsumerResponse withRegisterStreamConsumerOutput(openapisdk.models.shared.RegisterStreamConsumerOutput registerStreamConsumerOutput) {
        this.registerStreamConsumerOutput = registerStreamConsumerOutput;
        return this;
    }
    public Object resourceInUseException;
    public RegisterStreamConsumerResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public RegisterStreamConsumerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RegisterStreamConsumerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}