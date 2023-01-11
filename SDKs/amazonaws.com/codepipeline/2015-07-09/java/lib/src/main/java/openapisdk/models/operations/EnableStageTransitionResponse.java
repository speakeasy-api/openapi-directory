package openapisdk.models.operations;



public class EnableStageTransitionResponse {
    public String contentType;
    public EnableStageTransitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pipelineNotFoundException;
    public EnableStageTransitionResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Object stageNotFoundException;
    public EnableStageTransitionResponse withStageNotFoundException(Object stageNotFoundException) {
        this.stageNotFoundException = stageNotFoundException;
        return this;
    }
    public Long statusCode;
    public EnableStageTransitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public EnableStageTransitionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}