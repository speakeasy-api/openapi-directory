package openapisdk.models.operations;



public class UpdateProvisionedProductPropertiesResponse {
    public String contentType;
    public UpdateProvisionedProductPropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public UpdateProvisionedProductPropertiesResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object invalidStateException;
    public UpdateProvisionedProductPropertiesResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateProvisionedProductPropertiesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateProvisionedProductPropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateProvisionedProductPropertiesOutput updateProvisionedProductPropertiesOutput;
    public UpdateProvisionedProductPropertiesResponse withUpdateProvisionedProductPropertiesOutput(openapisdk.models.shared.UpdateProvisionedProductPropertiesOutput updateProvisionedProductPropertiesOutput) {
        this.updateProvisionedProductPropertiesOutput = updateProvisionedProductPropertiesOutput;
        return this;
    }
}