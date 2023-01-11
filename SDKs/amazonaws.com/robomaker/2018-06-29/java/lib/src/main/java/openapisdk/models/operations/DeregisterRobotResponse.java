package openapisdk.models.operations;



public class DeregisterRobotResponse {
    public String contentType;
    public DeregisterRobotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeregisterRobotResponse deregisterRobotResponse;
    public DeregisterRobotResponse withDeregisterRobotResponse(openapisdk.models.shared.DeregisterRobotResponse deregisterRobotResponse) {
        this.deregisterRobotResponse = deregisterRobotResponse;
        return this;
    }
    public Object internalServerException;
    public DeregisterRobotResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DeregisterRobotResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeregisterRobotResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeregisterRobotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeregisterRobotResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}