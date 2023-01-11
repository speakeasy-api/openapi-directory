package openapisdk.models.operations;



public class PutRemediationConfigurationsResponse {
    public String contentType;
    public PutRemediationConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientPermissionsException;
    public PutRemediationConfigurationsResponse withInsufficientPermissionsException(Object insufficientPermissionsException) {
        this.insufficientPermissionsException = insufficientPermissionsException;
        return this;
    }
    public Object invalidParameterValueException;
    public PutRemediationConfigurationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.PutRemediationConfigurationsResponse putRemediationConfigurationsResponse;
    public PutRemediationConfigurationsResponse withPutRemediationConfigurationsResponse(openapisdk.models.shared.PutRemediationConfigurationsResponse putRemediationConfigurationsResponse) {
        this.putRemediationConfigurationsResponse = putRemediationConfigurationsResponse;
        return this;
    }
    public Long statusCode;
    public PutRemediationConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}