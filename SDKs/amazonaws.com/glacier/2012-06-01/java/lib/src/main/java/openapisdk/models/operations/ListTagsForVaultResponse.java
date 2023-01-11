package openapisdk.models.operations;



public class ListTagsForVaultResponse {
    public String contentType;
    public ListTagsForVaultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListTagsForVaultResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListTagsForVaultOutput listTagsForVaultOutput;
    public ListTagsForVaultResponse withListTagsForVaultOutput(openapisdk.models.shared.ListTagsForVaultOutput listTagsForVaultOutput) {
        this.listTagsForVaultOutput = listTagsForVaultOutput;
        return this;
    }
    public Object missingParameterValueException;
    public ListTagsForVaultResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTagsForVaultResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListTagsForVaultResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListTagsForVaultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}