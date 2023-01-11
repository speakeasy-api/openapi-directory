package openapisdk.models.operations;



public class GetInsightResultsResponse {
    public String contentType;
    public GetInsightResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInsightResultsResponse getInsightResultsResponse;
    public GetInsightResultsResponse withGetInsightResultsResponse(openapisdk.models.shared.GetInsightResultsResponse getInsightResultsResponse) {
        this.getInsightResultsResponse = getInsightResultsResponse;
        return this;
    }
    public Object internalException;
    public GetInsightResultsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public GetInsightResultsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public GetInsightResultsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public GetInsightResultsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetInsightResultsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetInsightResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}