package openapisdk.models.operations;



public class StopBuildBatchResponse {
    public String contentType;
    public StopBuildBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public StopBuildBatchResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopBuildBatchResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopBuildBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopBuildBatchOutput stopBuildBatchOutput;
    public StopBuildBatchResponse withStopBuildBatchOutput(openapisdk.models.shared.StopBuildBatchOutput stopBuildBatchOutput) {
        this.stopBuildBatchOutput = stopBuildBatchOutput;
        return this;
    }
}