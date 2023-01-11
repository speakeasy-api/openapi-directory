package openapisdk.models.operations;



public class SetTaskStatusResponse {
    public String contentType;
    public SetTaskStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public SetTaskStatusResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public SetTaskStatusResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineDeletedException;
    public SetTaskStatusResponse withPipelineDeletedException(Object pipelineDeletedException) {
        this.pipelineDeletedException = pipelineDeletedException;
        return this;
    }
    public Object pipelineNotFoundException;
    public SetTaskStatusResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> setTaskStatusOutput;
    public SetTaskStatusResponse withSetTaskStatusOutput(java.util.Map<String, Object> setTaskStatusOutput) {
        this.setTaskStatusOutput = setTaskStatusOutput;
        return this;
    }
    public Long statusCode;
    public SetTaskStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taskNotFoundException;
    public SetTaskStatusResponse withTaskNotFoundException(Object taskNotFoundException) {
        this.taskNotFoundException = taskNotFoundException;
        return this;
    }
}