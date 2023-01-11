package openapisdk.models.operations;



public class StartOnDemandAuditTaskResponse {
    public String contentType;
    public StartOnDemandAuditTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public StartOnDemandAuditTaskResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public StartOnDemandAuditTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public StartOnDemandAuditTaskResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartOnDemandAuditTaskResponse startOnDemandAuditTaskResponse;
    public StartOnDemandAuditTaskResponse withStartOnDemandAuditTaskResponse(openapisdk.models.shared.StartOnDemandAuditTaskResponse startOnDemandAuditTaskResponse) {
        this.startOnDemandAuditTaskResponse = startOnDemandAuditTaskResponse;
        return this;
    }
    public Long statusCode;
    public StartOnDemandAuditTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartOnDemandAuditTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}