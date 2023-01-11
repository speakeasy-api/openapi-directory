package openapisdk.models.operations;



public class ListProvisionedProductPlansResponse {
    public String contentType;
    public ListProvisionedProductPlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListProvisionedProductPlansResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListProvisionedProductPlansOutput listProvisionedProductPlansOutput;
    public ListProvisionedProductPlansResponse withListProvisionedProductPlansOutput(openapisdk.models.shared.ListProvisionedProductPlansOutput listProvisionedProductPlansOutput) {
        this.listProvisionedProductPlansOutput = listProvisionedProductPlansOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListProvisionedProductPlansResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListProvisionedProductPlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}