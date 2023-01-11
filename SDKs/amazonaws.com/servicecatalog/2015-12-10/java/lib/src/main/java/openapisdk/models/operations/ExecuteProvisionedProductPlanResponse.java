package openapisdk.models.operations;



public class ExecuteProvisionedProductPlanResponse {
    public String contentType;
    public ExecuteProvisionedProductPlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExecuteProvisionedProductPlanOutput executeProvisionedProductPlanOutput;
    public ExecuteProvisionedProductPlanResponse withExecuteProvisionedProductPlanOutput(openapisdk.models.shared.ExecuteProvisionedProductPlanOutput executeProvisionedProductPlanOutput) {
        this.executeProvisionedProductPlanOutput = executeProvisionedProductPlanOutput;
        return this;
    }
    public Object invalidParametersException;
    public ExecuteProvisionedProductPlanResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object invalidStateException;
    public ExecuteProvisionedProductPlanResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public ExecuteProvisionedProductPlanResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ExecuteProvisionedProductPlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}