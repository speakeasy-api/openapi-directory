package openapisdk.models.operations;



public class DeleteRegistrationCodeResponse {
    public String contentType;
    public DeleteRegistrationCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteRegistrationCodeResponse;
    public DeleteRegistrationCodeResponse withDeleteRegistrationCodeResponse(java.util.Map<String, Object> deleteRegistrationCodeResponse) {
        this.deleteRegistrationCodeResponse = deleteRegistrationCodeResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteRegistrationCodeResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteRegistrationCodeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteRegistrationCodeResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteRegistrationCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteRegistrationCodeResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DeleteRegistrationCodeResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}