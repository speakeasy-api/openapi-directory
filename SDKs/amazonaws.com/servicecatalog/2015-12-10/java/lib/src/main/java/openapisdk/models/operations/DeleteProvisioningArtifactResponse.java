package openapisdk.models.operations;



public class DeleteProvisioningArtifactResponse {
    public String contentType;
    public DeleteProvisioningArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteProvisioningArtifactOutput;
    public DeleteProvisioningArtifactResponse withDeleteProvisioningArtifactOutput(java.util.Map<String, Object> deleteProvisioningArtifactOutput) {
        this.deleteProvisioningArtifactOutput = deleteProvisioningArtifactOutput;
        return this;
    }
    public Object invalidParametersException;
    public DeleteProvisioningArtifactResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteProvisioningArtifactResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteProvisioningArtifactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteProvisioningArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}