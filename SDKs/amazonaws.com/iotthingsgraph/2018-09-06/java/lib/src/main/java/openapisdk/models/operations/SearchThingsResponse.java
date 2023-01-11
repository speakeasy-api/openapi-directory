package openapisdk.models.operations;



public class SearchThingsResponse {
    public String contentType;
    public SearchThingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public SearchThingsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public SearchThingsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public SearchThingsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SearchThingsResponse searchThingsResponse;
    public SearchThingsResponse withSearchThingsResponse(openapisdk.models.shared.SearchThingsResponse searchThingsResponse) {
        this.searchThingsResponse = searchThingsResponse;
        return this;
    }
    public Long statusCode;
    public SearchThingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchThingsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}