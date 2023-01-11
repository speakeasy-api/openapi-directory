package openapisdk.models.operations;



public class StartPipelineExecutionResponse {
    public Object conflictException;
    public StartPipelineExecutionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartPipelineExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pipelineNotFoundException;
    public StartPipelineExecutionResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartPipelineExecutionOutput startPipelineExecutionOutput;
    public StartPipelineExecutionResponse withStartPipelineExecutionOutput(openapisdk.models.shared.StartPipelineExecutionOutput startPipelineExecutionOutput) {
        this.startPipelineExecutionOutput = startPipelineExecutionOutput;
        return this;
    }
    public Long statusCode;
    public StartPipelineExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public StartPipelineExecutionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}