package openapisdk.models.operations;



public class CreateQuantumTaskResponse {
    public Object accessDeniedException;
    public CreateQuantumTaskResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateQuantumTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateQuantumTaskResponse createQuantumTaskResponse;
    public CreateQuantumTaskResponse withCreateQuantumTaskResponse(openapisdk.models.shared.CreateQuantumTaskResponse createQuantumTaskResponse) {
        this.createQuantumTaskResponse = createQuantumTaskResponse;
        return this;
    }
    public Object deviceOfflineException;
    public CreateQuantumTaskResponse withDeviceOfflineException(Object deviceOfflineException) {
        this.deviceOfflineException = deviceOfflineException;
        return this;
    }
    public Object internalServiceException;
    public CreateQuantumTaskResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateQuantumTaskResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateQuantumTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateQuantumTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateQuantumTaskResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}