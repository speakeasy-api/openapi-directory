package openapisdk.models.operations;



public class StartDetectMitigationActionsTaskResponse {
    public String contentType;
    public StartDetectMitigationActionsTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public StartDetectMitigationActionsTaskResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public StartDetectMitigationActionsTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public StartDetectMitigationActionsTaskResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartDetectMitigationActionsTaskResponse startDetectMitigationActionsTaskResponse;
    public StartDetectMitigationActionsTaskResponse withStartDetectMitigationActionsTaskResponse(openapisdk.models.shared.StartDetectMitigationActionsTaskResponse startDetectMitigationActionsTaskResponse) {
        this.startDetectMitigationActionsTaskResponse = startDetectMitigationActionsTaskResponse;
        return this;
    }
    public Long statusCode;
    public StartDetectMitigationActionsTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taskAlreadyExistsException;
    public StartDetectMitigationActionsTaskResponse withTaskAlreadyExistsException(Object taskAlreadyExistsException) {
        this.taskAlreadyExistsException = taskAlreadyExistsException;
        return this;
    }
    public Object throttlingException;
    public StartDetectMitigationActionsTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}