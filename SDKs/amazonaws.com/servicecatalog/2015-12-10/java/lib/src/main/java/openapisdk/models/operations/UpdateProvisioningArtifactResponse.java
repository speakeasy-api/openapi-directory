package openapisdk.models.operations;



public class UpdateProvisioningArtifactResponse {
    public String contentType;
    public UpdateProvisioningArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public UpdateProvisioningArtifactResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateProvisioningArtifactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateProvisioningArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateProvisioningArtifactOutput updateProvisioningArtifactOutput;
    public UpdateProvisioningArtifactResponse withUpdateProvisioningArtifactOutput(openapisdk.models.shared.UpdateProvisioningArtifactOutput updateProvisioningArtifactOutput) {
        this.updateProvisioningArtifactOutput = updateProvisioningArtifactOutput;
        return this;
    }
}