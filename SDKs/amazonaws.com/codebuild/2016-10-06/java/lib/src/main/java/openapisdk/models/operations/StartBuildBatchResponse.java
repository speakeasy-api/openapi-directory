package openapisdk.models.operations;



public class StartBuildBatchResponse {
    public String contentType;
    public StartBuildBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public StartBuildBatchResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartBuildBatchResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartBuildBatchOutput startBuildBatchOutput;
    public StartBuildBatchResponse withStartBuildBatchOutput(openapisdk.models.shared.StartBuildBatchOutput startBuildBatchOutput) {
        this.startBuildBatchOutput = startBuildBatchOutput;
        return this;
    }
    public Long statusCode;
    public StartBuildBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}