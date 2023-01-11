package openapisdk.models.operations;



public class DisableStageTransitionResponse {
    public String contentType;
    public DisableStageTransitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pipelineNotFoundException;
    public DisableStageTransitionResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Object stageNotFoundException;
    public DisableStageTransitionResponse withStageNotFoundException(Object stageNotFoundException) {
        this.stageNotFoundException = stageNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisableStageTransitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DisableStageTransitionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}