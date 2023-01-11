package openapisdk.models.operations;



public class GetVaultLockResponse {
    public String contentType;
    public GetVaultLockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetVaultLockOutput getVaultLockOutput;
    public GetVaultLockResponse withGetVaultLockOutput(openapisdk.models.shared.GetVaultLockOutput getVaultLockOutput) {
        this.getVaultLockOutput = getVaultLockOutput;
        return this;
    }
    public Object invalidParameterValueException;
    public GetVaultLockResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public GetVaultLockResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetVaultLockResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetVaultLockResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetVaultLockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}