package openapisdk.models.operations;



public class ResolveComponentCandidatesResponse {
    public Object accessDeniedException;
    public ResolveComponentCandidatesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ResolveComponentCandidatesResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ResolveComponentCandidatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ResolveComponentCandidatesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ResolveComponentCandidatesResponse resolveComponentCandidatesResponse;
    public ResolveComponentCandidatesResponse withResolveComponentCandidatesResponse(openapisdk.models.shared.ResolveComponentCandidatesResponse resolveComponentCandidatesResponse) {
        this.resolveComponentCandidatesResponse = resolveComponentCandidatesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ResolveComponentCandidatesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ResolveComponentCandidatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ResolveComponentCandidatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ResolveComponentCandidatesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}