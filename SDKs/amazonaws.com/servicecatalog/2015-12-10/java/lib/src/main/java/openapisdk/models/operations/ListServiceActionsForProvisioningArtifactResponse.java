package openapisdk.models.operations;



public class ListServiceActionsForProvisioningArtifactResponse {
    public String contentType;
    public ListServiceActionsForProvisioningArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListServiceActionsForProvisioningArtifactResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListServiceActionsForProvisioningArtifactOutput listServiceActionsForProvisioningArtifactOutput;
    public ListServiceActionsForProvisioningArtifactResponse withListServiceActionsForProvisioningArtifactOutput(openapisdk.models.shared.ListServiceActionsForProvisioningArtifactOutput listServiceActionsForProvisioningArtifactOutput) {
        this.listServiceActionsForProvisioningArtifactOutput = listServiceActionsForProvisioningArtifactOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListServiceActionsForProvisioningArtifactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListServiceActionsForProvisioningArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}