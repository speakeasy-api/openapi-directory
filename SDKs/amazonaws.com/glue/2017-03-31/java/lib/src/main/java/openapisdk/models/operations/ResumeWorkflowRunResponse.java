package openapisdk.models.operations;



public class ResumeWorkflowRunResponse {
    public Object concurrentRunsExceededException;
    public ResumeWorkflowRunResponse withConcurrentRunsExceededException(Object concurrentRunsExceededException) {
        this.concurrentRunsExceededException = concurrentRunsExceededException;
        return this;
    }
    public String contentType;
    public ResumeWorkflowRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public ResumeWorkflowRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object illegalWorkflowStateException;
    public ResumeWorkflowRunResponse withIllegalWorkflowStateException(Object illegalWorkflowStateException) {
        this.illegalWorkflowStateException = illegalWorkflowStateException;
        return this;
    }
    public Object internalServiceException;
    public ResumeWorkflowRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public ResumeWorkflowRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public ResumeWorkflowRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public openapisdk.models.shared.ResumeWorkflowRunResponse resumeWorkflowRunResponse;
    public ResumeWorkflowRunResponse withResumeWorkflowRunResponse(openapisdk.models.shared.ResumeWorkflowRunResponse resumeWorkflowRunResponse) {
        this.resumeWorkflowRunResponse = resumeWorkflowRunResponse;
        return this;
    }
    public Long statusCode;
    public ResumeWorkflowRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}