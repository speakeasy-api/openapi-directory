package openapisdk.models.operations;



public class StartAuditMitigationActionsTaskResponse {
    public String contentType;
    public StartAuditMitigationActionsTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public StartAuditMitigationActionsTaskResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public StartAuditMitigationActionsTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public StartAuditMitigationActionsTaskResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartAuditMitigationActionsTaskResponse startAuditMitigationActionsTaskResponse;
    public StartAuditMitigationActionsTaskResponse withStartAuditMitigationActionsTaskResponse(openapisdk.models.shared.StartAuditMitigationActionsTaskResponse startAuditMitigationActionsTaskResponse) {
        this.startAuditMitigationActionsTaskResponse = startAuditMitigationActionsTaskResponse;
        return this;
    }
    public Long statusCode;
    public StartAuditMitigationActionsTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taskAlreadyExistsException;
    public StartAuditMitigationActionsTaskResponse withTaskAlreadyExistsException(Object taskAlreadyExistsException) {
        this.taskAlreadyExistsException = taskAlreadyExistsException;
        return this;
    }
    public Object throttlingException;
    public StartAuditMitigationActionsTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}