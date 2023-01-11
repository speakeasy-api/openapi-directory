package openapisdk.models.operations;



public class DisassociateCreatedArtifactResponse {
    public Object accessDeniedException;
    public DisassociateCreatedArtifactResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DisassociateCreatedArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateCreatedArtifactResult;
    public DisassociateCreatedArtifactResponse withDisassociateCreatedArtifactResult(java.util.Map<String, Object> disassociateCreatedArtifactResult) {
        this.disassociateCreatedArtifactResult = disassociateCreatedArtifactResult;
        return this;
    }
    public Object dryRunOperation;
    public DisassociateCreatedArtifactResponse withDryRunOperation(Object dryRunOperation) {
        this.dryRunOperation = dryRunOperation;
        return this;
    }
    public Object homeRegionNotSetException;
    public DisassociateCreatedArtifactResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public DisassociateCreatedArtifactResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public DisassociateCreatedArtifactResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateCreatedArtifactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DisassociateCreatedArtifactResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DisassociateCreatedArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisassociateCreatedArtifactResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedOperation;
    public DisassociateCreatedArtifactResponse withUnauthorizedOperation(Object unauthorizedOperation) {
        this.unauthorizedOperation = unauthorizedOperation;
        return this;
    }
}