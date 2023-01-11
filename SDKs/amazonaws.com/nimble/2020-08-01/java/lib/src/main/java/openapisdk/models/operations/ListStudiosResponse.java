package openapisdk.models.operations;



public class ListStudiosResponse {
    public Object accessDeniedException;
    public ListStudiosResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListStudiosResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListStudiosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public ListStudiosResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListStudiosResponse listStudiosResponse;
    public ListStudiosResponse withListStudiosResponse(openapisdk.models.shared.ListStudiosResponse listStudiosResponse) {
        this.listStudiosResponse = listStudiosResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListStudiosResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListStudiosResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListStudiosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListStudiosResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListStudiosResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}