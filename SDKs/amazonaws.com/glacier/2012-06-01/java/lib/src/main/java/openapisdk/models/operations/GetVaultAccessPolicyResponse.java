package openapisdk.models.operations;



public class GetVaultAccessPolicyResponse {
    public String contentType;
    public GetVaultAccessPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetVaultAccessPolicyOutput getVaultAccessPolicyOutput;
    public GetVaultAccessPolicyResponse withGetVaultAccessPolicyOutput(openapisdk.models.shared.GetVaultAccessPolicyOutput getVaultAccessPolicyOutput) {
        this.getVaultAccessPolicyOutput = getVaultAccessPolicyOutput;
        return this;
    }
    public Object invalidParameterValueException;
    public GetVaultAccessPolicyResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public GetVaultAccessPolicyResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetVaultAccessPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetVaultAccessPolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetVaultAccessPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}