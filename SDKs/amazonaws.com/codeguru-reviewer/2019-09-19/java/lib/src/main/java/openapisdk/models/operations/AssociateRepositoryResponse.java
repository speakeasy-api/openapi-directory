package openapisdk.models.operations;



public class AssociateRepositoryResponse {
    public Object accessDeniedException;
    public AssociateRepositoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AssociateRepositoryResponse associateRepositoryResponse;
    public AssociateRepositoryResponse withAssociateRepositoryResponse(openapisdk.models.shared.AssociateRepositoryResponse associateRepositoryResponse) {
        this.associateRepositoryResponse = associateRepositoryResponse;
        return this;
    }
    public Object conflictException;
    public AssociateRepositoryResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public AssociateRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public AssociateRepositoryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public AssociateRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AssociateRepositoryResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public AssociateRepositoryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}