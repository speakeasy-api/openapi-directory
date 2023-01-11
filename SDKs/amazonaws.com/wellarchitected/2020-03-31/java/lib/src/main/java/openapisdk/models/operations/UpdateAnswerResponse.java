package openapisdk.models.operations;



public class UpdateAnswerResponse {
    public Object accessDeniedException;
    public UpdateAnswerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateAnswerResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateAnswerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateAnswerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAnswerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAnswerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateAnswerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateAnswerOutput updateAnswerOutput;
    public UpdateAnswerResponse withUpdateAnswerOutput(openapisdk.models.shared.UpdateAnswerOutput updateAnswerOutput) {
        this.updateAnswerOutput = updateAnswerOutput;
        return this;
    }
    public Object validationException;
    public UpdateAnswerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}