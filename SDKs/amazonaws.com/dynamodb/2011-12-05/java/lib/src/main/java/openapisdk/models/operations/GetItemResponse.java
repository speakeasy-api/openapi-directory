package openapisdk.models.operations;



public class GetItemResponse {
    public String contentType;
    public GetItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetItemOutput getItemOutput;
    public GetItemResponse withGetItemOutput(openapisdk.models.shared.GetItemOutput getItemOutput) {
        this.getItemOutput = getItemOutput;
        return this;
    }
    public Object internalServerError;
    public GetItemResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public GetItemResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object requestLimitExceeded;
    public GetItemResponse withRequestLimitExceeded(Object requestLimitExceeded) {
        this.requestLimitExceeded = requestLimitExceeded;
        return this;
    }
    public Object resourceNotFoundException;
    public GetItemResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}