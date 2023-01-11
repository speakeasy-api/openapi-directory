package openapisdk.models.operations;



public class StopBuildResponse {
    public String contentType;
    public StopBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public StopBuildResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopBuildResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopBuildOutput stopBuildOutput;
    public StopBuildResponse withStopBuildOutput(openapisdk.models.shared.StopBuildOutput stopBuildOutput) {
        this.stopBuildOutput = stopBuildOutput;
        return this;
    }
}