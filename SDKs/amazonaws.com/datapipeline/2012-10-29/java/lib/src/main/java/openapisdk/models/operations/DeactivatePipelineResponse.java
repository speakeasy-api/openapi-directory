package openapisdk.models.operations;



public class DeactivatePipelineResponse {
    public String contentType;
    public DeactivatePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deactivatePipelineOutput;
    public DeactivatePipelineResponse withDeactivatePipelineOutput(java.util.Map<String, Object> deactivatePipelineOutput) {
        this.deactivatePipelineOutput = deactivatePipelineOutput;
        return this;
    }
    public Object internalServiceError;
    public DeactivatePipelineResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public DeactivatePipelineResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineDeletedException;
    public DeactivatePipelineResponse withPipelineDeletedException(Object pipelineDeletedException) {
        this.pipelineDeletedException = pipelineDeletedException;
        return this;
    }
    public Object pipelineNotFoundException;
    public DeactivatePipelineResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeactivatePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}