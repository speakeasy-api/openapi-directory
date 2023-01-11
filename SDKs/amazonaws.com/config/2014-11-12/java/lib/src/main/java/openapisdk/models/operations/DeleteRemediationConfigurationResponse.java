package openapisdk.models.operations;



public class DeleteRemediationConfigurationResponse {
    public String contentType;
    public DeleteRemediationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteRemediationConfigurationResponse;
    public DeleteRemediationConfigurationResponse withDeleteRemediationConfigurationResponse(java.util.Map<String, Object> deleteRemediationConfigurationResponse) {
        this.deleteRemediationConfigurationResponse = deleteRemediationConfigurationResponse;
        return this;
    }
    public Object insufficientPermissionsException;
    public DeleteRemediationConfigurationResponse withInsufficientPermissionsException(Object insufficientPermissionsException) {
        this.insufficientPermissionsException = insufficientPermissionsException;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteRemediationConfigurationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchRemediationConfigurationException;
    public DeleteRemediationConfigurationResponse withNoSuchRemediationConfigurationException(Object noSuchRemediationConfigurationException) {
        this.noSuchRemediationConfigurationException = noSuchRemediationConfigurationException;
        return this;
    }
    public Object remediationInProgressException;
    public DeleteRemediationConfigurationResponse withRemediationInProgressException(Object remediationInProgressException) {
        this.remediationInProgressException = remediationInProgressException;
        return this;
    }
    public Long statusCode;
    public DeleteRemediationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}