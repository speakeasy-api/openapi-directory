package openapisdk.models.operations;



public class StartBuildResponse {
    public Object accountLimitExceededException;
    public StartBuildResponse withAccountLimitExceededException(Object accountLimitExceededException) {
        this.accountLimitExceededException = accountLimitExceededException;
        return this;
    }
    public String contentType;
    public StartBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public StartBuildResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartBuildResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartBuildOutput startBuildOutput;
    public StartBuildResponse withStartBuildOutput(openapisdk.models.shared.StartBuildOutput startBuildOutput) {
        this.startBuildOutput = startBuildOutput;
        return this;
    }
    public Long statusCode;
    public StartBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}