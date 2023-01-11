package openapisdk.models.operations;



public class SetVaultAccessPolicyResponse {
    public String contentType;
    public SetVaultAccessPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public SetVaultAccessPolicyResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public SetVaultAccessPolicyResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public SetVaultAccessPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public SetVaultAccessPolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public SetVaultAccessPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}