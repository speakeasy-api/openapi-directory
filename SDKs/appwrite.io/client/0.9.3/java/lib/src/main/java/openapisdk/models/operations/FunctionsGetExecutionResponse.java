package openapisdk.models.operations;



public class FunctionsGetExecutionResponse {
    public String contentType;
    public FunctionsGetExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FunctionsGetExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Execution execution;
    public FunctionsGetExecutionResponse withExecution(openapisdk.models.shared.Execution execution) {
        this.execution = execution;
        return this;
    }
}