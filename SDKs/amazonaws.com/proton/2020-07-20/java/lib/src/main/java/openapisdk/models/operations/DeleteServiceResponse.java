package openapisdk.models.operations;



public class DeleteServiceResponse {
    public Object accessDeniedException;
    public DeleteServiceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteServiceResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteServiceOutput deleteServiceOutput;
    public DeleteServiceResponse withDeleteServiceOutput(openapisdk.models.shared.DeleteServiceOutput deleteServiceOutput) {
        this.deleteServiceOutput = deleteServiceOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteServiceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteServiceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteServiceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteServiceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}