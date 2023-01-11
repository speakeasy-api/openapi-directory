package openapisdk.models.operations;



public class SearchIndexResponse {
    public String contentType;
    public SearchIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object indexNotReadyException;
    public SearchIndexResponse withIndexNotReadyException(Object indexNotReadyException) {
        this.indexNotReadyException = indexNotReadyException;
        return this;
    }
    public Object internalFailureException;
    public SearchIndexResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidQueryException;
    public SearchIndexResponse withInvalidQueryException(Object invalidQueryException) {
        this.invalidQueryException = invalidQueryException;
        return this;
    }
    public Object invalidRequestException;
    public SearchIndexResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public SearchIndexResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SearchIndexResponse searchIndexResponse;
    public SearchIndexResponse withSearchIndexResponse(openapisdk.models.shared.SearchIndexResponse searchIndexResponse) {
        this.searchIndexResponse = searchIndexResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public SearchIndexResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public SearchIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchIndexResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public SearchIndexResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}