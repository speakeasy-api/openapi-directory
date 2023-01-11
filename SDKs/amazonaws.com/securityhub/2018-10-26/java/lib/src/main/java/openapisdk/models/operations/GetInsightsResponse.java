package openapisdk.models.operations;



public class GetInsightsResponse {
    public String contentType;
    public GetInsightsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInsightsResponse getInsightsResponse;
    public GetInsightsResponse withGetInsightsResponse(openapisdk.models.shared.GetInsightsResponse getInsightsResponse) {
        this.getInsightsResponse = getInsightsResponse;
        return this;
    }
    public Object internalException;
    public GetInsightsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public GetInsightsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public GetInsightsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public GetInsightsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetInsightsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetInsightsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}