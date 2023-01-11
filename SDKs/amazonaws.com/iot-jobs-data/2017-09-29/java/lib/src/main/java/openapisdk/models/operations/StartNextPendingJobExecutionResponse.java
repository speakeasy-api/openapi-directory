package openapisdk.models.operations;



public class StartNextPendingJobExecutionResponse {
    public Object certificateValidationException;
    public StartNextPendingJobExecutionResponse withCertificateValidationException(Object certificateValidationException) {
        this.certificateValidationException = certificateValidationException;
        return this;
    }
    public String contentType;
    public StartNextPendingJobExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public StartNextPendingJobExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartNextPendingJobExecutionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public StartNextPendingJobExecutionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public openapisdk.models.shared.StartNextPendingJobExecutionResponse startNextPendingJobExecutionResponse;
    public StartNextPendingJobExecutionResponse withStartNextPendingJobExecutionResponse(openapisdk.models.shared.StartNextPendingJobExecutionResponse startNextPendingJobExecutionResponse) {
        this.startNextPendingJobExecutionResponse = startNextPendingJobExecutionResponse;
        return this;
    }
    public Long statusCode;
    public StartNextPendingJobExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartNextPendingJobExecutionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}