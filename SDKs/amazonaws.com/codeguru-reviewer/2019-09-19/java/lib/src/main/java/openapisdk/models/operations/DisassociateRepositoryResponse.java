package openapisdk.models.operations;



public class DisassociateRepositoryResponse {
    public Object accessDeniedException;
    public DisassociateRepositoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DisassociateRepositoryResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DisassociateRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateRepositoryResponse disassociateRepositoryResponse;
    public DisassociateRepositoryResponse withDisassociateRepositoryResponse(openapisdk.models.shared.DisassociateRepositoryResponse disassociateRepositoryResponse) {
        this.disassociateRepositoryResponse = disassociateRepositoryResponse;
        return this;
    }
    public Object internalServerException;
    public DisassociateRepositoryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object notFoundException;
    public DisassociateRepositoryResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisassociateRepositoryResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DisassociateRepositoryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}