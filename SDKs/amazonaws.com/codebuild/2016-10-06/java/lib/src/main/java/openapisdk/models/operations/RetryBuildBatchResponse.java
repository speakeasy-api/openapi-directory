package openapisdk.models.operations;



public class RetryBuildBatchResponse {
    public String contentType;
    public RetryBuildBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public RetryBuildBatchResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public RetryBuildBatchResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryBuildBatchOutput retryBuildBatchOutput;
    public RetryBuildBatchResponse withRetryBuildBatchOutput(openapisdk.models.shared.RetryBuildBatchOutput retryBuildBatchOutput) {
        this.retryBuildBatchOutput = retryBuildBatchOutput;
        return this;
    }
    public Long statusCode;
    public RetryBuildBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}