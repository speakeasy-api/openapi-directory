package openapisdk.models.operations;



public class ListProvisioningArtifactsForServiceActionResponse {
    public String contentType;
    public ListProvisioningArtifactsForServiceActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListProvisioningArtifactsForServiceActionResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListProvisioningArtifactsForServiceActionOutput listProvisioningArtifactsForServiceActionOutput;
    public ListProvisioningArtifactsForServiceActionResponse withListProvisioningArtifactsForServiceActionOutput(openapisdk.models.shared.ListProvisioningArtifactsForServiceActionOutput listProvisioningArtifactsForServiceActionOutput) {
        this.listProvisioningArtifactsForServiceActionOutput = listProvisioningArtifactsForServiceActionOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListProvisioningArtifactsForServiceActionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListProvisioningArtifactsForServiceActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}