package openapisdk.models.operations;



public class PutItemResponse {
    public Object conditionalCheckFailedException;
    public PutItemResponse withConditionalCheckFailedException(Object conditionalCheckFailedException) {
        this.conditionalCheckFailedException = conditionalCheckFailedException;
        return this;
    }
    public String contentType;
    public PutItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public PutItemResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object limitExceededException;
    public PutItemResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public PutItemResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public openapisdk.models.shared.PutItemOutput putItemOutput;
    public PutItemResponse withPutItemOutput(openapisdk.models.shared.PutItemOutput putItemOutput) {
        this.putItemOutput = putItemOutput;
        return this;
    }
    public Object requestLimitExceeded;
    public PutItemResponse withRequestLimitExceeded(Object requestLimitExceeded) {
        this.requestLimitExceeded = requestLimitExceeded;
        return this;
    }
    public Object resourceNotFoundException;
    public PutItemResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}