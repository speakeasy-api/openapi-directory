package openapisdk.models.operations;



public class ImportAsProvisionedProductResponse {
    public String contentType;
    public ImportAsProvisionedProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateResourceException;
    public ImportAsProvisionedProductResponse withDuplicateResourceException(Object duplicateResourceException) {
        this.duplicateResourceException = duplicateResourceException;
        return this;
    }
    public openapisdk.models.shared.ImportAsProvisionedProductOutput importAsProvisionedProductOutput;
    public ImportAsProvisionedProductResponse withImportAsProvisionedProductOutput(openapisdk.models.shared.ImportAsProvisionedProductOutput importAsProvisionedProductOutput) {
        this.importAsProvisionedProductOutput = importAsProvisionedProductOutput;
        return this;
    }
    public Object invalidParametersException;
    public ImportAsProvisionedProductResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object invalidStateException;
    public ImportAsProvisionedProductResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public ImportAsProvisionedProductResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ImportAsProvisionedProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}