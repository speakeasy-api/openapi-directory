package openapisdk.models.operations;



public class InitiateVaultLockResponse {
    public String contentType;
    public InitiateVaultLockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> initiateVaultLockOutput;
    public InitiateVaultLockResponse withInitiateVaultLockOutput(java.util.Map<String, Object> initiateVaultLockOutput) {
        this.initiateVaultLockOutput = initiateVaultLockOutput;
        return this;
    }
    public Object invalidParameterValueException;
    public InitiateVaultLockResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public InitiateVaultLockResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public InitiateVaultLockResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public InitiateVaultLockResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public InitiateVaultLockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}