package openapisdk.models.operations;



public class DescribeObjectsResponse {
    public String contentType;
    public DescribeObjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeObjectsOutput describeObjectsOutput;
    public DescribeObjectsResponse withDescribeObjectsOutput(openapisdk.models.shared.DescribeObjectsOutput describeObjectsOutput) {
        this.describeObjectsOutput = describeObjectsOutput;
        return this;
    }
    public Object internalServiceError;
    public DescribeObjectsResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public DescribeObjectsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineDeletedException;
    public DescribeObjectsResponse withPipelineDeletedException(Object pipelineDeletedException) {
        this.pipelineDeletedException = pipelineDeletedException;
        return this;
    }
    public Object pipelineNotFoundException;
    public DescribeObjectsResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeObjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}