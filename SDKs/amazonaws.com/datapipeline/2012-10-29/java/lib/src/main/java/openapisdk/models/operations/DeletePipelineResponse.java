package openapisdk.models.operations;



public class DeletePipelineResponse {
    public String contentType;
    public DeletePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public DeletePipelineResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public DeletePipelineResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineNotFoundException;
    public DeletePipelineResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeletePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}