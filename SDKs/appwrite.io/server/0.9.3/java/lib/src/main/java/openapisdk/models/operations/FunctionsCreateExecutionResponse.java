package openapisdk.models.operations;



public class FunctionsCreateExecutionResponse {
    public String contentType;
    public FunctionsCreateExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FunctionsCreateExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Execution execution;
    public FunctionsCreateExecutionResponse withExecution(openapisdk.models.shared.Execution execution) {
        this.execution = execution;
        return this;
    }
}