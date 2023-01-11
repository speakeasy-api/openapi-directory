package openapisdk.models.operations;



public class ListStackInstancesForProvisionedProductResponse {
    public String contentType;
    public ListStackInstancesForProvisionedProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListStackInstancesForProvisionedProductResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListStackInstancesForProvisionedProductOutput listStackInstancesForProvisionedProductOutput;
    public ListStackInstancesForProvisionedProductResponse withListStackInstancesForProvisionedProductOutput(openapisdk.models.shared.ListStackInstancesForProvisionedProductOutput listStackInstancesForProvisionedProductOutput) {
        this.listStackInstancesForProvisionedProductOutput = listStackInstancesForProvisionedProductOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListStackInstancesForProvisionedProductResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListStackInstancesForProvisionedProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}