package openapisdk.models.operations;



public class StopPipelineExecutionResponse {
    public Object conflictException;
    public StopPipelineExecutionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StopPipelineExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicatedStopRequestException;
    public StopPipelineExecutionResponse withDuplicatedStopRequestException(Object duplicatedStopRequestException) {
        this.duplicatedStopRequestException = duplicatedStopRequestException;
        return this;
    }
    public Object pipelineExecutionNotStoppableException;
    public StopPipelineExecutionResponse withPipelineExecutionNotStoppableException(Object pipelineExecutionNotStoppableException) {
        this.pipelineExecutionNotStoppableException = pipelineExecutionNotStoppableException;
        return this;
    }
    public Object pipelineNotFoundException;
    public StopPipelineExecutionResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopPipelineExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopPipelineExecutionOutput stopPipelineExecutionOutput;
    public StopPipelineExecutionResponse withStopPipelineExecutionOutput(openapisdk.models.shared.StopPipelineExecutionOutput stopPipelineExecutionOutput) {
        this.stopPipelineExecutionOutput = stopPipelineExecutionOutput;
        return this;
    }
    public Object validationException;
    public StopPipelineExecutionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}