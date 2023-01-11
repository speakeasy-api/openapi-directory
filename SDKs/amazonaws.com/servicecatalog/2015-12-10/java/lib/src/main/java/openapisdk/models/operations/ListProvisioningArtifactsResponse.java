package openapisdk.models.operations;



public class ListProvisioningArtifactsResponse {
    public String contentType;
    public ListProvisioningArtifactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListProvisioningArtifactsResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListProvisioningArtifactsOutput listProvisioningArtifactsOutput;
    public ListProvisioningArtifactsResponse withListProvisioningArtifactsOutput(openapisdk.models.shared.ListProvisioningArtifactsOutput listProvisioningArtifactsOutput) {
        this.listProvisioningArtifactsOutput = listProvisioningArtifactsOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListProvisioningArtifactsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListProvisioningArtifactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}