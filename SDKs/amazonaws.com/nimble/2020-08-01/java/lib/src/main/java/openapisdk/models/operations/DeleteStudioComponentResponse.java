package openapisdk.models.operations;



public class DeleteStudioComponentResponse {
    public Object accessDeniedException;
    public DeleteStudioComponentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteStudioComponentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteStudioComponentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteStudioComponentResponse deleteStudioComponentResponse;
    public DeleteStudioComponentResponse withDeleteStudioComponentResponse(openapisdk.models.shared.DeleteStudioComponentResponse deleteStudioComponentResponse) {
        this.deleteStudioComponentResponse = deleteStudioComponentResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteStudioComponentResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteStudioComponentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteStudioComponentResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteStudioComponentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteStudioComponentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteStudioComponentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}