package openapisdk.models.operations;



public class GetPipelineDefinitionResponse {
    public String contentType;
    public GetPipelineDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPipelineDefinitionOutput getPipelineDefinitionOutput;
    public GetPipelineDefinitionResponse withGetPipelineDefinitionOutput(openapisdk.models.shared.GetPipelineDefinitionOutput getPipelineDefinitionOutput) {
        this.getPipelineDefinitionOutput = getPipelineDefinitionOutput;
        return this;
    }
    public Object internalServiceError;
    public GetPipelineDefinitionResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public GetPipelineDefinitionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineDeletedException;
    public GetPipelineDefinitionResponse withPipelineDeletedException(Object pipelineDeletedException) {
        this.pipelineDeletedException = pipelineDeletedException;
        return this;
    }
    public Object pipelineNotFoundException;
    public GetPipelineDefinitionResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetPipelineDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}