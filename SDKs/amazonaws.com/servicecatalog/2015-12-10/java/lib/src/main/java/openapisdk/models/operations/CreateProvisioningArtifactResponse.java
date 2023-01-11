package openapisdk.models.operations;



public class CreateProvisioningArtifactResponse {
    public String contentType;
    public CreateProvisioningArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateProvisioningArtifactOutput createProvisioningArtifactOutput;
    public CreateProvisioningArtifactResponse withCreateProvisioningArtifactOutput(openapisdk.models.shared.CreateProvisioningArtifactOutput createProvisioningArtifactOutput) {
        this.createProvisioningArtifactOutput = createProvisioningArtifactOutput;
        return this;
    }
    public Object invalidParametersException;
    public CreateProvisioningArtifactResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object limitExceededException;
    public CreateProvisioningArtifactResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateProvisioningArtifactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateProvisioningArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}