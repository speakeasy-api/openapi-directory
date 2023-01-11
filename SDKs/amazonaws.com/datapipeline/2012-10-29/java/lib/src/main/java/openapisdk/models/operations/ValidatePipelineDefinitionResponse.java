package openapisdk.models.operations;



public class ValidatePipelineDefinitionResponse {
    public String contentType;
    public ValidatePipelineDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ValidatePipelineDefinitionResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public ValidatePipelineDefinitionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineDeletedException;
    public ValidatePipelineDefinitionResponse withPipelineDeletedException(Object pipelineDeletedException) {
        this.pipelineDeletedException = pipelineDeletedException;
        return this;
    }
    public Object pipelineNotFoundException;
    public ValidatePipelineDefinitionResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public ValidatePipelineDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidatePipelineDefinitionOutput validatePipelineDefinitionOutput;
    public ValidatePipelineDefinitionResponse withValidatePipelineDefinitionOutput(openapisdk.models.shared.ValidatePipelineDefinitionOutput validatePipelineDefinitionOutput) {
        this.validatePipelineDefinitionOutput = validatePipelineDefinitionOutput;
        return this;
    }
}