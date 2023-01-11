package openapisdk.models.operations;



public class PutPipelineDefinitionResponse {
    public String contentType;
    public PutPipelineDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public PutPipelineDefinitionResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public PutPipelineDefinitionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineDeletedException;
    public PutPipelineDefinitionResponse withPipelineDeletedException(Object pipelineDeletedException) {
        this.pipelineDeletedException = pipelineDeletedException;
        return this;
    }
    public Object pipelineNotFoundException;
    public PutPipelineDefinitionResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public openapisdk.models.shared.PutPipelineDefinitionOutput putPipelineDefinitionOutput;
    public PutPipelineDefinitionResponse withPutPipelineDefinitionOutput(openapisdk.models.shared.PutPipelineDefinitionOutput putPipelineDefinitionOutput) {
        this.putPipelineDefinitionOutput = putPipelineDefinitionOutput;
        return this;
    }
    public Long statusCode;
    public PutPipelineDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}