package openapisdk.models.operations;



public class AssociateServiceActionWithProvisioningArtifactResponse {
    public java.util.Map<String, Object> associateServiceActionWithProvisioningArtifactOutput;
    public AssociateServiceActionWithProvisioningArtifactResponse withAssociateServiceActionWithProvisioningArtifactOutput(java.util.Map<String, Object> associateServiceActionWithProvisioningArtifactOutput) {
        this.associateServiceActionWithProvisioningArtifactOutput = associateServiceActionWithProvisioningArtifactOutput;
        return this;
    }
    public String contentType;
    public AssociateServiceActionWithProvisioningArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateResourceException;
    public AssociateServiceActionWithProvisioningArtifactResponse withDuplicateResourceException(Object duplicateResourceException) {
        this.duplicateResourceException = duplicateResourceException;
        return this;
    }
    public Object limitExceededException;
    public AssociateServiceActionWithProvisioningArtifactResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateServiceActionWithProvisioningArtifactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateServiceActionWithProvisioningArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}