package openapisdk.models.operations;



public class CreateVaultResponse {
    public String contentType;
    public CreateVaultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createVaultOutput;
    public CreateVaultResponse withCreateVaultOutput(java.util.Map<String, Object> createVaultOutput) {
        this.createVaultOutput = createVaultOutput;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateVaultResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object limitExceededException;
    public CreateVaultResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object missingParameterValueException;
    public CreateVaultResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateVaultResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateVaultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}