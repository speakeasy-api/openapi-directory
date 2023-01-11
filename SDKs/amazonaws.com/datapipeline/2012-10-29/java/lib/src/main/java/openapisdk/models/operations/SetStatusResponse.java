package openapisdk.models.operations;



public class SetStatusResponse {
    public String contentType;
    public SetStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public SetStatusResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public SetStatusResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineDeletedException;
    public SetStatusResponse withPipelineDeletedException(Object pipelineDeletedException) {
        this.pipelineDeletedException = pipelineDeletedException;
        return this;
    }
    public Object pipelineNotFoundException;
    public SetStatusResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public SetStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}