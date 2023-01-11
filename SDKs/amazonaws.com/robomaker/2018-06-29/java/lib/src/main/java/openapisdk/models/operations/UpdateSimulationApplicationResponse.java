package openapisdk.models.operations;



public class UpdateSimulationApplicationResponse {
    public String contentType;
    public UpdateSimulationApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateSimulationApplicationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateSimulationApplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public UpdateSimulationApplicationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateSimulationApplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateSimulationApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateSimulationApplicationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateSimulationApplicationResponse updateSimulationApplicationResponse;
    public UpdateSimulationApplicationResponse withUpdateSimulationApplicationResponse(openapisdk.models.shared.UpdateSimulationApplicationResponse updateSimulationApplicationResponse) {
        this.updateSimulationApplicationResponse = updateSimulationApplicationResponse;
        return this;
    }
}