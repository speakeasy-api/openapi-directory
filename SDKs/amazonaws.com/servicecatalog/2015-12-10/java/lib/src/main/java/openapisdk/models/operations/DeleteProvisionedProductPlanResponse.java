package openapisdk.models.operations;



public class DeleteProvisionedProductPlanResponse {
    public String contentType;
    public DeleteProvisionedProductPlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteProvisionedProductPlanOutput;
    public DeleteProvisionedProductPlanResponse withDeleteProvisionedProductPlanOutput(java.util.Map<String, Object> deleteProvisionedProductPlanOutput) {
        this.deleteProvisionedProductPlanOutput = deleteProvisionedProductPlanOutput;
        return this;
    }
    public Object invalidParametersException;
    public DeleteProvisionedProductPlanResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteProvisionedProductPlanResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteProvisionedProductPlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}