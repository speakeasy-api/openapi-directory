package openapisdk.models.operations;



public class GetStudioComponentResponse {
    public Object accessDeniedException;
    public GetStudioComponentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetStudioComponentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetStudioComponentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetStudioComponentResponse getStudioComponentResponse;
    public GetStudioComponentResponse withGetStudioComponentResponse(openapisdk.models.shared.GetStudioComponentResponse getStudioComponentResponse) {
        this.getStudioComponentResponse = getStudioComponentResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetStudioComponentResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetStudioComponentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetStudioComponentResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetStudioComponentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetStudioComponentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetStudioComponentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}