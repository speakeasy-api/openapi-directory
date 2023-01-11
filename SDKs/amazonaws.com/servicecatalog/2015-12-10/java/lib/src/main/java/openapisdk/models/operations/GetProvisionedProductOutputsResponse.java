package openapisdk.models.operations;



public class GetProvisionedProductOutputsResponse {
    public String contentType;
    public GetProvisionedProductOutputsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetProvisionedProductOutputsOutput getProvisionedProductOutputsOutput;
    public GetProvisionedProductOutputsResponse withGetProvisionedProductOutputsOutput(openapisdk.models.shared.GetProvisionedProductOutputsOutput getProvisionedProductOutputsOutput) {
        this.getProvisionedProductOutputsOutput = getProvisionedProductOutputsOutput;
        return this;
    }
    public Object invalidParametersException;
    public GetProvisionedProductOutputsResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetProvisionedProductOutputsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetProvisionedProductOutputsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}