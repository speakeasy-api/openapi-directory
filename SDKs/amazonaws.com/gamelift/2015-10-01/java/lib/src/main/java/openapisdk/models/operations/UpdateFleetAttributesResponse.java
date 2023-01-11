package openapisdk.models.operations;



public class UpdateFleetAttributesResponse {
    public Object conflictException;
    public UpdateFleetAttributesResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateFleetAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateFleetAttributesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidFleetStatusException;
    public UpdateFleetAttributesResponse withInvalidFleetStatusException(Object invalidFleetStatusException) {
        this.invalidFleetStatusException = invalidFleetStatusException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateFleetAttributesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public UpdateFleetAttributesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateFleetAttributesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateFleetAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateFleetAttributesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateFleetAttributesOutput updateFleetAttributesOutput;
    public UpdateFleetAttributesResponse withUpdateFleetAttributesOutput(openapisdk.models.shared.UpdateFleetAttributesOutput updateFleetAttributesOutput) {
        this.updateFleetAttributesOutput = updateFleetAttributesOutput;
        return this;
    }
}