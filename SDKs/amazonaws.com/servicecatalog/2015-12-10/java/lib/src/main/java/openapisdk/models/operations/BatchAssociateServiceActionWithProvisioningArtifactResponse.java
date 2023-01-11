package openapisdk.models.operations;



public class BatchAssociateServiceActionWithProvisioningArtifactResponse {
    public openapisdk.models.shared.BatchAssociateServiceActionWithProvisioningArtifactOutput batchAssociateServiceActionWithProvisioningArtifactOutput;
    public BatchAssociateServiceActionWithProvisioningArtifactResponse withBatchAssociateServiceActionWithProvisioningArtifactOutput(openapisdk.models.shared.BatchAssociateServiceActionWithProvisioningArtifactOutput batchAssociateServiceActionWithProvisioningArtifactOutput) {
        this.batchAssociateServiceActionWithProvisioningArtifactOutput = batchAssociateServiceActionWithProvisioningArtifactOutput;
        return this;
    }
    public String contentType;
    public BatchAssociateServiceActionWithProvisioningArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public BatchAssociateServiceActionWithProvisioningArtifactResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Long statusCode;
    public BatchAssociateServiceActionWithProvisioningArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}