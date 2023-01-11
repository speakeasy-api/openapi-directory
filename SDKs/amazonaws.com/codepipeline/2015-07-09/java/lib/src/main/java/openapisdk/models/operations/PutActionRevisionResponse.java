package openapisdk.models.operations;



public class PutActionRevisionResponse {
    public Object actionNotFoundException;
    public PutActionRevisionResponse withActionNotFoundException(Object actionNotFoundException) {
        this.actionNotFoundException = actionNotFoundException;
        return this;
    }
    public String contentType;
    public PutActionRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pipelineNotFoundException;
    public PutActionRevisionResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public openapisdk.models.shared.PutActionRevisionOutput putActionRevisionOutput;
    public PutActionRevisionResponse withPutActionRevisionOutput(openapisdk.models.shared.PutActionRevisionOutput putActionRevisionOutput) {
        this.putActionRevisionOutput = putActionRevisionOutput;
        return this;
    }
    public Object stageNotFoundException;
    public PutActionRevisionResponse withStageNotFoundException(Object stageNotFoundException) {
        this.stageNotFoundException = stageNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutActionRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutActionRevisionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}