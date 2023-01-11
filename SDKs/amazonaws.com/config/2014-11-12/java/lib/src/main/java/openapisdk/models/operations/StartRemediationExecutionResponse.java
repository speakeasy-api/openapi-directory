package openapisdk.models.operations;



public class StartRemediationExecutionResponse {
    public String contentType;
    public StartRemediationExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientPermissionsException;
    public StartRemediationExecutionResponse withInsufficientPermissionsException(Object insufficientPermissionsException) {
        this.insufficientPermissionsException = insufficientPermissionsException;
        return this;
    }
    public Object invalidParameterValueException;
    public StartRemediationExecutionResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchRemediationConfigurationException;
    public StartRemediationExecutionResponse withNoSuchRemediationConfigurationException(Object noSuchRemediationConfigurationException) {
        this.noSuchRemediationConfigurationException = noSuchRemediationConfigurationException;
        return this;
    }
    public openapisdk.models.shared.StartRemediationExecutionResponse startRemediationExecutionResponse;
    public StartRemediationExecutionResponse withStartRemediationExecutionResponse(openapisdk.models.shared.StartRemediationExecutionResponse startRemediationExecutionResponse) {
        this.startRemediationExecutionResponse = startRemediationExecutionResponse;
        return this;
    }
    public Long statusCode;
    public StartRemediationExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}