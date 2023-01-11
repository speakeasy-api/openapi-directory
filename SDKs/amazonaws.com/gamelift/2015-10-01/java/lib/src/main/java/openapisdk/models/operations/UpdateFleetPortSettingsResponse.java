package openapisdk.models.operations;



public class UpdateFleetPortSettingsResponse {
    public Object conflictException;
    public UpdateFleetPortSettingsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateFleetPortSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateFleetPortSettingsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidFleetStatusException;
    public UpdateFleetPortSettingsResponse withInvalidFleetStatusException(Object invalidFleetStatusException) {
        this.invalidFleetStatusException = invalidFleetStatusException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateFleetPortSettingsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public UpdateFleetPortSettingsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateFleetPortSettingsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateFleetPortSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateFleetPortSettingsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateFleetPortSettingsOutput updateFleetPortSettingsOutput;
    public UpdateFleetPortSettingsResponse withUpdateFleetPortSettingsOutput(openapisdk.models.shared.UpdateFleetPortSettingsOutput updateFleetPortSettingsOutput) {
        this.updateFleetPortSettingsOutput = updateFleetPortSettingsOutput;
        return this;
    }
}