package openapisdk.models.operations;



public class GetPipelineResponse {
    public String contentType;
    public GetPipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPipelineOutput getPipelineOutput;
    public GetPipelineResponse withGetPipelineOutput(openapisdk.models.shared.GetPipelineOutput getPipelineOutput) {
        this.getPipelineOutput = getPipelineOutput;
        return this;
    }
    public Object pipelineNotFoundException;
    public GetPipelineResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Object pipelineVersionNotFoundException;
    public GetPipelineResponse withPipelineVersionNotFoundException(Object pipelineVersionNotFoundException) {
        this.pipelineVersionNotFoundException = pipelineVersionNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetPipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetPipelineResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}