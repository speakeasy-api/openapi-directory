package openapisdk.models.operations;



public class RetryStageExecutionResponse {
    public Object conflictException;
    public RetryStageExecutionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public RetryStageExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notLatestPipelineExecutionException;
    public RetryStageExecutionResponse withNotLatestPipelineExecutionException(Object notLatestPipelineExecutionException) {
        this.notLatestPipelineExecutionException = notLatestPipelineExecutionException;
        return this;
    }
    public Object pipelineNotFoundException;
    public RetryStageExecutionResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryStageExecutionOutput retryStageExecutionOutput;
    public RetryStageExecutionResponse withRetryStageExecutionOutput(openapisdk.models.shared.RetryStageExecutionOutput retryStageExecutionOutput) {
        this.retryStageExecutionOutput = retryStageExecutionOutput;
        return this;
    }
    public Object stageNotFoundException;
    public RetryStageExecutionResponse withStageNotFoundException(Object stageNotFoundException) {
        this.stageNotFoundException = stageNotFoundException;
        return this;
    }
    public Object stageNotRetryableException;
    public RetryStageExecutionResponse withStageNotRetryableException(Object stageNotRetryableException) {
        this.stageNotRetryableException = stageNotRetryableException;
        return this;
    }
    public Long statusCode;
    public RetryStageExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RetryStageExecutionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}