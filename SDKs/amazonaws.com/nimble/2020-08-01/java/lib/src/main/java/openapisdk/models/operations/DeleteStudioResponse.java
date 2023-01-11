package openapisdk.models.operations;



public class DeleteStudioResponse {
    public Object accessDeniedException;
    public DeleteStudioResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteStudioResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteStudioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteStudioResponse deleteStudioResponse;
    public DeleteStudioResponse withDeleteStudioResponse(openapisdk.models.shared.DeleteStudioResponse deleteStudioResponse) {
        this.deleteStudioResponse = deleteStudioResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteStudioResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteStudioResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteStudioResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteStudioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteStudioResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteStudioResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}