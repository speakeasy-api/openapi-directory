package openapisdk.models.operations;



public class BatchDisassociateServiceActionFromProvisioningArtifactResponse {
    public openapisdk.models.shared.BatchDisassociateServiceActionFromProvisioningArtifactOutput batchDisassociateServiceActionFromProvisioningArtifactOutput;
    public BatchDisassociateServiceActionFromProvisioningArtifactResponse withBatchDisassociateServiceActionFromProvisioningArtifactOutput(openapisdk.models.shared.BatchDisassociateServiceActionFromProvisioningArtifactOutput batchDisassociateServiceActionFromProvisioningArtifactOutput) {
        this.batchDisassociateServiceActionFromProvisioningArtifactOutput = batchDisassociateServiceActionFromProvisioningArtifactOutput;
        return this;
    }
    public String contentType;
    public BatchDisassociateServiceActionFromProvisioningArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public BatchDisassociateServiceActionFromProvisioningArtifactResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Long statusCode;
    public BatchDisassociateServiceActionFromProvisioningArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}