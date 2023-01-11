package openapisdk.models.operations;



public class GetPipelineExecutionResponse {
    public String contentType;
    public GetPipelineExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPipelineExecutionOutput getPipelineExecutionOutput;
    public GetPipelineExecutionResponse withGetPipelineExecutionOutput(openapisdk.models.shared.GetPipelineExecutionOutput getPipelineExecutionOutput) {
        this.getPipelineExecutionOutput = getPipelineExecutionOutput;
        return this;
    }
    public Object pipelineExecutionNotFoundException;
    public GetPipelineExecutionResponse withPipelineExecutionNotFoundException(Object pipelineExecutionNotFoundException) {
        this.pipelineExecutionNotFoundException = pipelineExecutionNotFoundException;
        return this;
    }
    public Object pipelineNotFoundException;
    public GetPipelineExecutionResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetPipelineExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetPipelineExecutionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}