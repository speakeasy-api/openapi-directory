package openapisdk.models.operations;



public class DescribePipelinesResponse {
    public String contentType;
    public DescribePipelinesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePipelinesOutput describePipelinesOutput;
    public DescribePipelinesResponse withDescribePipelinesOutput(openapisdk.models.shared.DescribePipelinesOutput describePipelinesOutput) {
        this.describePipelinesOutput = describePipelinesOutput;
        return this;
    }
    public Object internalServiceError;
    public DescribePipelinesResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public DescribePipelinesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineDeletedException;
    public DescribePipelinesResponse withPipelineDeletedException(Object pipelineDeletedException) {
        this.pipelineDeletedException = pipelineDeletedException;
        return this;
    }
    public Object pipelineNotFoundException;
    public DescribePipelinesResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePipelinesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}