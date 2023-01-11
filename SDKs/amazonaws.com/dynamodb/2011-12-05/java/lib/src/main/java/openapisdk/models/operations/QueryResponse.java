package openapisdk.models.operations;



public class QueryResponse {
    public String contentType;
    public QueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public QueryResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public QueryResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public openapisdk.models.shared.QueryOutput queryOutput;
    public QueryResponse withQueryOutput(openapisdk.models.shared.QueryOutput queryOutput) {
        this.queryOutput = queryOutput;
        return this;
    }
    public Object requestLimitExceeded;
    public QueryResponse withRequestLimitExceeded(Object requestLimitExceeded) {
        this.requestLimitExceeded = requestLimitExceeded;
        return this;
    }
    public Object resourceNotFoundException;
    public QueryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public QueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}