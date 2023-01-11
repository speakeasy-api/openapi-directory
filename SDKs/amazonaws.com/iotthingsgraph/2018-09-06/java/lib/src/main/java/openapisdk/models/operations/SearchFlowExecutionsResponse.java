package openapisdk.models.operations;



public class SearchFlowExecutionsResponse {
    public String contentType;
    public SearchFlowExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public SearchFlowExecutionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public SearchFlowExecutionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public SearchFlowExecutionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SearchFlowExecutionsResponse searchFlowExecutionsResponse;
    public SearchFlowExecutionsResponse withSearchFlowExecutionsResponse(openapisdk.models.shared.SearchFlowExecutionsResponse searchFlowExecutionsResponse) {
        this.searchFlowExecutionsResponse = searchFlowExecutionsResponse;
        return this;
    }
    public Long statusCode;
    public SearchFlowExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchFlowExecutionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}