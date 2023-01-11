package openapisdk.models.operations;



public class RegisterRobotResponse {
    public String contentType;
    public RegisterRobotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public RegisterRobotResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public RegisterRobotResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public RegisterRobotResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.RegisterRobotResponse registerRobotResponse;
    public RegisterRobotResponse withRegisterRobotResponse(openapisdk.models.shared.RegisterRobotResponse registerRobotResponse) {
        this.registerRobotResponse = registerRobotResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public RegisterRobotResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RegisterRobotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RegisterRobotResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}