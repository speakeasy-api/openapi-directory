package openapisdk.models.operations;



public class UpdateLensReviewResponse {
    public Object accessDeniedException;
    public UpdateLensReviewResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateLensReviewResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateLensReviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateLensReviewResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateLensReviewResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateLensReviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateLensReviewResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateLensReviewOutput updateLensReviewOutput;
    public UpdateLensReviewResponse withUpdateLensReviewOutput(openapisdk.models.shared.UpdateLensReviewOutput updateLensReviewOutput) {
        this.updateLensReviewOutput = updateLensReviewOutput;
        return this;
    }
    public Object validationException;
    public UpdateLensReviewResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}