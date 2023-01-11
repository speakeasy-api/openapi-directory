package openapisdk.models.operations;



public class RemoveTagsFromVaultResponse {
    public String contentType;
    public RemoveTagsFromVaultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public RemoveTagsFromVaultResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public RemoveTagsFromVaultResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public RemoveTagsFromVaultResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public RemoveTagsFromVaultResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public RemoveTagsFromVaultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}