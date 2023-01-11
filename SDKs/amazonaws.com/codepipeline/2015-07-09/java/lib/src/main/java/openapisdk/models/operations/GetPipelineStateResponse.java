package openapisdk.models.operations;



public class GetPipelineStateResponse {
    public String contentType;
    public GetPipelineStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPipelineStateOutput getPipelineStateOutput;
    public GetPipelineStateResponse withGetPipelineStateOutput(openapisdk.models.shared.GetPipelineStateOutput getPipelineStateOutput) {
        this.getPipelineStateOutput = getPipelineStateOutput;
        return this;
    }
    public Object pipelineNotFoundException;
    public GetPipelineStateResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetPipelineStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetPipelineStateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}