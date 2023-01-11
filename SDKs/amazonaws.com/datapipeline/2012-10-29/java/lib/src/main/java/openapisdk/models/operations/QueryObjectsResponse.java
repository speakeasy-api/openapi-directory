package openapisdk.models.operations;



public class QueryObjectsResponse {
    public String contentType;
    public QueryObjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public QueryObjectsResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public QueryObjectsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineDeletedException;
    public QueryObjectsResponse withPipelineDeletedException(Object pipelineDeletedException) {
        this.pipelineDeletedException = pipelineDeletedException;
        return this;
    }
    public Object pipelineNotFoundException;
    public QueryObjectsResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public openapisdk.models.shared.QueryObjectsOutput queryObjectsOutput;
    public QueryObjectsResponse withQueryObjectsOutput(openapisdk.models.shared.QueryObjectsOutput queryObjectsOutput) {
        this.queryObjectsOutput = queryObjectsOutput;
        return this;
    }
    public Long statusCode;
    public QueryObjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}