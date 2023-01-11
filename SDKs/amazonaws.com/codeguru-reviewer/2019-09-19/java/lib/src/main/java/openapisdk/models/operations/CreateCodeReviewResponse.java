package openapisdk.models.operations;



public class CreateCodeReviewResponse {
    public Object accessDeniedException;
    public CreateCodeReviewResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateCodeReviewResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateCodeReviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCodeReviewResponse createCodeReviewResponse;
    public CreateCodeReviewResponse withCreateCodeReviewResponse(openapisdk.models.shared.CreateCodeReviewResponse createCodeReviewResponse) {
        this.createCodeReviewResponse = createCodeReviewResponse;
        return this;
    }
    public Object internalServerException;
    public CreateCodeReviewResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateCodeReviewResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateCodeReviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateCodeReviewResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateCodeReviewResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}