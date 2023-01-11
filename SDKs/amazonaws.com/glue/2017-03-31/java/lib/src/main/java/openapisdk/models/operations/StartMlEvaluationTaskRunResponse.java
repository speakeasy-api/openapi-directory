package openapisdk.models.operations;



public class StartMlEvaluationTaskRunResponse {
    public Object concurrentRunsExceededException;
    public StartMlEvaluationTaskRunResponse withConcurrentRunsExceededException(Object concurrentRunsExceededException) {
        this.concurrentRunsExceededException = concurrentRunsExceededException;
        return this;
    }
    public String contentType;
    public StartMlEvaluationTaskRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public StartMlEvaluationTaskRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public StartMlEvaluationTaskRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public StartMlEvaluationTaskRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object mlTransformNotReadyException;
    public StartMlEvaluationTaskRunResponse withMlTransformNotReadyException(Object mlTransformNotReadyException) {
        this.mlTransformNotReadyException = mlTransformNotReadyException;
        return this;
    }
    public Object operationTimeoutException;
    public StartMlEvaluationTaskRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public openapisdk.models.shared.StartMlEvaluationTaskRunResponse startMLEvaluationTaskRunResponse;
    public StartMlEvaluationTaskRunResponse withStartMlEvaluationTaskRunResponse(openapisdk.models.shared.StartMlEvaluationTaskRunResponse startMLEvaluationTaskRunResponse) {
        this.startMLEvaluationTaskRunResponse = startMLEvaluationTaskRunResponse;
        return this;
    }
    public Long statusCode;
    public StartMlEvaluationTaskRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}