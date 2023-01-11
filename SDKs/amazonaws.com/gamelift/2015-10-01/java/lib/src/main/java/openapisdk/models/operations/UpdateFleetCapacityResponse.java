package openapisdk.models.operations;



public class UpdateFleetCapacityResponse {
    public Object conflictException;
    public UpdateFleetCapacityResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateFleetCapacityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateFleetCapacityResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidFleetStatusException;
    public UpdateFleetCapacityResponse withInvalidFleetStatusException(Object invalidFleetStatusException) {
        this.invalidFleetStatusException = invalidFleetStatusException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateFleetCapacityResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public UpdateFleetCapacityResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateFleetCapacityResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateFleetCapacityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateFleetCapacityResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateFleetCapacityOutput updateFleetCapacityOutput;
    public UpdateFleetCapacityResponse withUpdateFleetCapacityOutput(openapisdk.models.shared.UpdateFleetCapacityOutput updateFleetCapacityOutput) {
        this.updateFleetCapacityOutput = updateFleetCapacityOutput;
        return this;
    }
}