package openapisdk.models.operations;



public class RemoveTagsResponse {
    public String contentType;
    public RemoveTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public RemoveTagsResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public RemoveTagsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineDeletedException;
    public RemoveTagsResponse withPipelineDeletedException(Object pipelineDeletedException) {
        this.pipelineDeletedException = pipelineDeletedException;
        return this;
    }
    public Object pipelineNotFoundException;
    public RemoveTagsResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> removeTagsOutput;
    public RemoveTagsResponse withRemoveTagsOutput(java.util.Map<String, Object> removeTagsOutput) {
        this.removeTagsOutput = removeTagsOutput;
        return this;
    }
    public Long statusCode;
    public RemoveTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}