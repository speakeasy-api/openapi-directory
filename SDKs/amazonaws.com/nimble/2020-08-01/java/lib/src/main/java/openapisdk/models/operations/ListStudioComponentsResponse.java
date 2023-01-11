package openapisdk.models.operations;



public class ListStudioComponentsResponse {
    public Object accessDeniedException;
    public ListStudioComponentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListStudioComponentsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListStudioComponentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public ListStudioComponentsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListStudioComponentsResponse listStudioComponentsResponse;
    public ListStudioComponentsResponse withListStudioComponentsResponse(openapisdk.models.shared.ListStudioComponentsResponse listStudioComponentsResponse) {
        this.listStudioComponentsResponse = listStudioComponentsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListStudioComponentsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListStudioComponentsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListStudioComponentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListStudioComponentsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListStudioComponentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}