package openapisdk.models.operations;



public class SearchResourcesResponse {
    public Object accessDeniedException;
    public SearchResourcesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public SearchResourcesResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public SearchResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public SearchResourcesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public SearchResourcesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SearchResourcesResponse searchResourcesResponse;
    public SearchResourcesResponse withSearchResourcesResponse(openapisdk.models.shared.SearchResourcesResponse searchResourcesResponse) {
        this.searchResourcesResponse = searchResourcesResponse;
        return this;
    }
    public Object serviceQuotaExceededException;
    public SearchResourcesResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public SearchResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchResourcesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public SearchResourcesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}