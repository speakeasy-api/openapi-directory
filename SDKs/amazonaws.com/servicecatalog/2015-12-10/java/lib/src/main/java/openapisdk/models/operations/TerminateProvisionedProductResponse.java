package openapisdk.models.operations;



public class TerminateProvisionedProductResponse {
    public String contentType;
    public TerminateProvisionedProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public TerminateProvisionedProductResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public TerminateProvisionedProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TerminateProvisionedProductOutput terminateProvisionedProductOutput;
    public TerminateProvisionedProductResponse withTerminateProvisionedProductOutput(openapisdk.models.shared.TerminateProvisionedProductOutput terminateProvisionedProductOutput) {
        this.terminateProvisionedProductOutput = terminateProvisionedProductOutput;
        return this;
    }
}