package openapisdk.models.operations;



public class DisassociateServiceActionFromProvisioningArtifactResponse {
    public String contentType;
    public DisassociateServiceActionFromProvisioningArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateServiceActionFromProvisioningArtifactOutput;
    public DisassociateServiceActionFromProvisioningArtifactResponse withDisassociateServiceActionFromProvisioningArtifactOutput(java.util.Map<String, Object> disassociateServiceActionFromProvisioningArtifactOutput) {
        this.disassociateServiceActionFromProvisioningArtifactOutput = disassociateServiceActionFromProvisioningArtifactOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateServiceActionFromProvisioningArtifactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateServiceActionFromProvisioningArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}