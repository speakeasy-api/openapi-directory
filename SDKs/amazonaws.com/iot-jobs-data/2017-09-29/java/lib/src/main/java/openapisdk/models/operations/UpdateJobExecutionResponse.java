package openapisdk.models.operations;



public class UpdateJobExecutionResponse {
    public Object certificateValidationException;
    public UpdateJobExecutionResponse withCertificateValidationException(Object certificateValidationException) {
        this.certificateValidationException = certificateValidationException;
        return this;
    }
    public String contentType;
    public UpdateJobExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public UpdateJobExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidStateTransitionException;
    public UpdateJobExecutionResponse withInvalidStateTransitionException(Object invalidStateTransitionException) {
        this.invalidStateTransitionException = invalidStateTransitionException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateJobExecutionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public UpdateJobExecutionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateJobExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateJobExecutionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateJobExecutionResponse updateJobExecutionResponse;
    public UpdateJobExecutionResponse withUpdateJobExecutionResponse(openapisdk.models.shared.UpdateJobExecutionResponse updateJobExecutionResponse) {
        this.updateJobExecutionResponse = updateJobExecutionResponse;
        return this;
    }
}