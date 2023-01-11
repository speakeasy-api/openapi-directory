package openapisdk.models.operations;



public class ListAccessPreviewFindingsResponse {
    public Object accessDeniedException;
    public ListAccessPreviewFindingsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListAccessPreviewFindingsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListAccessPreviewFindingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAccessPreviewFindingsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAccessPreviewFindingsResponse listAccessPreviewFindingsResponse;
    public ListAccessPreviewFindingsResponse withListAccessPreviewFindingsResponse(openapisdk.models.shared.ListAccessPreviewFindingsResponse listAccessPreviewFindingsResponse) {
        this.listAccessPreviewFindingsResponse = listAccessPreviewFindingsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAccessPreviewFindingsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAccessPreviewFindingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAccessPreviewFindingsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListAccessPreviewFindingsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}