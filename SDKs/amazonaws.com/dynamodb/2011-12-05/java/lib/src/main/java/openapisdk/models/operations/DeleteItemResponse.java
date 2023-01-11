package openapisdk.models.operations;



public class DeleteItemResponse {
    public Object conditionalCheckFailedException;
    public DeleteItemResponse withConditionalCheckFailedException(Object conditionalCheckFailedException) {
        this.conditionalCheckFailedException = conditionalCheckFailedException;
        return this;
    }
    public String contentType;
    public DeleteItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteItemOutput deleteItemOutput;
    public DeleteItemResponse withDeleteItemOutput(openapisdk.models.shared.DeleteItemOutput deleteItemOutput) {
        this.deleteItemOutput = deleteItemOutput;
        return this;
    }
    public Object internalServerError;
    public DeleteItemResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object limitExceededException;
    public DeleteItemResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public DeleteItemResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object requestLimitExceeded;
    public DeleteItemResponse withRequestLimitExceeded(Object requestLimitExceeded) {
        this.requestLimitExceeded = requestLimitExceeded;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteItemResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}