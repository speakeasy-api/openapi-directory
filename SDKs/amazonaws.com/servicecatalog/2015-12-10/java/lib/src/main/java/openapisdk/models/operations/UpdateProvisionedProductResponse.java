package openapisdk.models.operations;



public class UpdateProvisionedProductResponse {
    public String contentType;
    public UpdateProvisionedProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public UpdateProvisionedProductResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateProvisionedProductResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateProvisionedProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateProvisionedProductOutput updateProvisionedProductOutput;
    public UpdateProvisionedProductResponse withUpdateProvisionedProductOutput(openapisdk.models.shared.UpdateProvisionedProductOutput updateProvisionedProductOutput) {
        this.updateProvisionedProductOutput = updateProvisionedProductOutput;
        return this;
    }
}