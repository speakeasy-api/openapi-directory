package openapisdk.models.operations;



public class ProvisionProductResponse {
    public String contentType;
    public ProvisionProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateResourceException;
    public ProvisionProductResponse withDuplicateResourceException(Object duplicateResourceException) {
        this.duplicateResourceException = duplicateResourceException;
        return this;
    }
    public Object invalidParametersException;
    public ProvisionProductResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ProvisionProductOutput provisionProductOutput;
    public ProvisionProductResponse withProvisionProductOutput(openapisdk.models.shared.ProvisionProductOutput provisionProductOutput) {
        this.provisionProductOutput = provisionProductOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ProvisionProductResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ProvisionProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}