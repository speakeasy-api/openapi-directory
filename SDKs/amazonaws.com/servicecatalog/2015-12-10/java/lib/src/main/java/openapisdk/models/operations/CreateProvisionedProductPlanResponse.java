package openapisdk.models.operations;



public class CreateProvisionedProductPlanResponse {
    public String contentType;
    public CreateProvisionedProductPlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateProvisionedProductPlanOutput createProvisionedProductPlanOutput;
    public CreateProvisionedProductPlanResponse withCreateProvisionedProductPlanOutput(openapisdk.models.shared.CreateProvisionedProductPlanOutput createProvisionedProductPlanOutput) {
        this.createProvisionedProductPlanOutput = createProvisionedProductPlanOutput;
        return this;
    }
    public Object invalidParametersException;
    public CreateProvisionedProductPlanResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object invalidStateException;
    public CreateProvisionedProductPlanResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateProvisionedProductPlanResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateProvisionedProductPlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}