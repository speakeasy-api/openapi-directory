package openapisdk.models.operations;



public class UpdateRobotApplicationResponse {
    public String contentType;
    public UpdateRobotApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateRobotApplicationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateRobotApplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public UpdateRobotApplicationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateRobotApplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateRobotApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateRobotApplicationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateRobotApplicationResponse updateRobotApplicationResponse;
    public UpdateRobotApplicationResponse withUpdateRobotApplicationResponse(openapisdk.models.shared.UpdateRobotApplicationResponse updateRobotApplicationResponse) {
        this.updateRobotApplicationResponse = updateRobotApplicationResponse;
        return this;
    }
}