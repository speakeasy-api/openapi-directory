package openapisdk.models.operations;



public class UpdateItemResponse {
    public Object conditionalCheckFailedException;
    public UpdateItemResponse withConditionalCheckFailedException(Object conditionalCheckFailedException) {
        this.conditionalCheckFailedException = conditionalCheckFailedException;
        return this;
    }
    public String contentType;
    public UpdateItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public UpdateItemResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object limitExceededException;
    public UpdateItemResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public UpdateItemResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object requestLimitExceeded;
    public UpdateItemResponse withRequestLimitExceeded(Object requestLimitExceeded) {
        this.requestLimitExceeded = requestLimitExceeded;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateItemResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateItemOutput updateItemOutput;
    public UpdateItemResponse withUpdateItemOutput(openapisdk.models.shared.UpdateItemOutput updateItemOutput) {
        this.updateItemOutput = updateItemOutput;
        return this;
    }
}