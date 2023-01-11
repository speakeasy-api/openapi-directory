package openapisdk.models.operations;



public class ListCustomDataIdentifiersResponse {
    public Object accessDeniedException;
    public ListCustomDataIdentifiersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListCustomDataIdentifiersResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListCustomDataIdentifiersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListCustomDataIdentifiersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListCustomDataIdentifiersResponse listCustomDataIdentifiersResponse;
    public ListCustomDataIdentifiersResponse withListCustomDataIdentifiersResponse(openapisdk.models.shared.ListCustomDataIdentifiersResponse listCustomDataIdentifiersResponse) {
        this.listCustomDataIdentifiersResponse = listCustomDataIdentifiersResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListCustomDataIdentifiersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListCustomDataIdentifiersResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListCustomDataIdentifiersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListCustomDataIdentifiersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListCustomDataIdentifiersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}