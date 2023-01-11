package openapisdk.models.operations;



public class ActivatePipelineResponse {
    public java.util.Map<String, Object> activatePipelineOutput;
    public ActivatePipelineResponse withActivatePipelineOutput(java.util.Map<String, Object> activatePipelineOutput) {
        this.activatePipelineOutput = activatePipelineOutput;
        return this;
    }
    public String contentType;
    public ActivatePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ActivatePipelineResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public ActivatePipelineResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineDeletedException;
    public ActivatePipelineResponse withPipelineDeletedException(Object pipelineDeletedException) {
        this.pipelineDeletedException = pipelineDeletedException;
        return this;
    }
    public Object pipelineNotFoundException;
    public ActivatePipelineResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public ActivatePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}