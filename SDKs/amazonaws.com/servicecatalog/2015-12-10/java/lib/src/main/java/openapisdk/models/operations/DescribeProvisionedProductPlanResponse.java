package openapisdk.models.operations;



public class DescribeProvisionedProductPlanResponse {
    public String contentType;
    public DescribeProvisionedProductPlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProvisionedProductPlanOutput describeProvisionedProductPlanOutput;
    public DescribeProvisionedProductPlanResponse withDescribeProvisionedProductPlanOutput(openapisdk.models.shared.DescribeProvisionedProductPlanOutput describeProvisionedProductPlanOutput) {
        this.describeProvisionedProductPlanOutput = describeProvisionedProductPlanOutput;
        return this;
    }
    public Object invalidParametersException;
    public DescribeProvisionedProductPlanResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProvisionedProductPlanResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProvisionedProductPlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}