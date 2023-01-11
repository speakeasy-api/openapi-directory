package openapisdk.models.operations;



public class UpdateEmergencyContactSettingsResponse {
    public String contentType;
    public UpdateEmergencyContactSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public UpdateEmergencyContactSettingsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateEmergencyContactSettingsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object optimisticLockException;
    public UpdateEmergencyContactSettingsResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateEmergencyContactSettingsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateEmergencyContactSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateEmergencyContactSettingsResponse;
    public UpdateEmergencyContactSettingsResponse withUpdateEmergencyContactSettingsResponse(java.util.Map<String, Object> updateEmergencyContactSettingsResponse) {
        this.updateEmergencyContactSettingsResponse = updateEmergencyContactSettingsResponse;
        return this;
    }
}