package openapisdk.models.operations;



public class AcceptEulasResponse {
    public openapisdk.models.shared.AcceptEulasResponse acceptEulasResponse;
    public AcceptEulasResponse withAcceptEulasResponse(openapisdk.models.shared.AcceptEulasResponse acceptEulasResponse) {
        this.acceptEulasResponse = acceptEulasResponse;
        return this;
    }
    public Object accessDeniedException;
    public AcceptEulasResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public AcceptEulasResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public AcceptEulasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public AcceptEulasResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public AcceptEulasResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public AcceptEulasResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public AcceptEulasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AcceptEulasResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public AcceptEulasResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}