package openapisdk.models.operations;



public class StartMlLabelingSetGenerationTaskRunResponse {
    public Object concurrentRunsExceededException;
    public StartMlLabelingSetGenerationTaskRunResponse withConcurrentRunsExceededException(Object concurrentRunsExceededException) {
        this.concurrentRunsExceededException = concurrentRunsExceededException;
        return this;
    }
    public String contentType;
    public StartMlLabelingSetGenerationTaskRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public StartMlLabelingSetGenerationTaskRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public StartMlLabelingSetGenerationTaskRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public StartMlLabelingSetGenerationTaskRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public StartMlLabelingSetGenerationTaskRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public openapisdk.models.shared.StartMlLabelingSetGenerationTaskRunResponse startMLLabelingSetGenerationTaskRunResponse;
    public StartMlLabelingSetGenerationTaskRunResponse withStartMlLabelingSetGenerationTaskRunResponse(openapisdk.models.shared.StartMlLabelingSetGenerationTaskRunResponse startMLLabelingSetGenerationTaskRunResponse) {
        this.startMLLabelingSetGenerationTaskRunResponse = startMLLabelingSetGenerationTaskRunResponse;
        return this;
    }
    public Long statusCode;
    public StartMlLabelingSetGenerationTaskRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}