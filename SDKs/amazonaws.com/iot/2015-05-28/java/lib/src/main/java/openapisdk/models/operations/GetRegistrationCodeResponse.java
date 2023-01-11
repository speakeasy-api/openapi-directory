package openapisdk.models.operations;



public class GetRegistrationCodeResponse {
    public String contentType;
    public GetRegistrationCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRegistrationCodeResponse getRegistrationCodeResponse;
    public GetRegistrationCodeResponse withGetRegistrationCodeResponse(openapisdk.models.shared.GetRegistrationCodeResponse getRegistrationCodeResponse) {
        this.getRegistrationCodeResponse = getRegistrationCodeResponse;
        return this;
    }
    public Object internalFailureException;
    public GetRegistrationCodeResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetRegistrationCodeResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetRegistrationCodeResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetRegistrationCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetRegistrationCodeResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public GetRegistrationCodeResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}