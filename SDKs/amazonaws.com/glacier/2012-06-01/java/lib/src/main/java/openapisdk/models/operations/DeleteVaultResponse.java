package openapisdk.models.operations;



public class DeleteVaultResponse {
    public String contentType;
    public DeleteVaultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteVaultResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public DeleteVaultResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteVaultResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteVaultResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteVaultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}