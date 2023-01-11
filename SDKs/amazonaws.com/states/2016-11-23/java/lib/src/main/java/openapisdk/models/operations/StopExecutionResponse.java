package openapisdk.models.operations;



public class StopExecutionResponse {
    public String contentType;
    public StopExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object executionDoesNotExist;
    public StopExecutionResponse withExecutionDoesNotExist(Object executionDoesNotExist) {
        this.executionDoesNotExist = executionDoesNotExist;
        return this;
    }
    public Object invalidArn;
    public StopExecutionResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Long statusCode;
    public StopExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopExecutionOutput stopExecutionOutput;
    public StopExecutionResponse withStopExecutionOutput(openapisdk.models.shared.StopExecutionOutput stopExecutionOutput) {
        this.stopExecutionOutput = stopExecutionOutput;
        return this;
    }
}