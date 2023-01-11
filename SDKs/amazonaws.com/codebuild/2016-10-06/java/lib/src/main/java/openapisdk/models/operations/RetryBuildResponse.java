package openapisdk.models.operations;



public class RetryBuildResponse {
    public Object accountLimitExceededException;
    public RetryBuildResponse withAccountLimitExceededException(Object accountLimitExceededException) {
        this.accountLimitExceededException = accountLimitExceededException;
        return this;
    }
    public String contentType;
    public RetryBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public RetryBuildResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public RetryBuildResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryBuildOutput retryBuildOutput;
    public RetryBuildResponse withRetryBuildOutput(openapisdk.models.shared.RetryBuildOutput retryBuildOutput) {
        this.retryBuildOutput = retryBuildOutput;
        return this;
    }
    public Long statusCode;
    public RetryBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}