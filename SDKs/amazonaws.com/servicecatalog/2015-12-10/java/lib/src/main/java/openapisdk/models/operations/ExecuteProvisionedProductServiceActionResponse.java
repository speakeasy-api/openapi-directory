package openapisdk.models.operations;



public class ExecuteProvisionedProductServiceActionResponse {
    public String contentType;
    public ExecuteProvisionedProductServiceActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExecuteProvisionedProductServiceActionOutput executeProvisionedProductServiceActionOutput;
    public ExecuteProvisionedProductServiceActionResponse withExecuteProvisionedProductServiceActionOutput(openapisdk.models.shared.ExecuteProvisionedProductServiceActionOutput executeProvisionedProductServiceActionOutput) {
        this.executeProvisionedProductServiceActionOutput = executeProvisionedProductServiceActionOutput;
        return this;
    }
    public Object invalidParametersException;
    public ExecuteProvisionedProductServiceActionResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object invalidStateException;
    public ExecuteProvisionedProductServiceActionResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public ExecuteProvisionedProductServiceActionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ExecuteProvisionedProductServiceActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}