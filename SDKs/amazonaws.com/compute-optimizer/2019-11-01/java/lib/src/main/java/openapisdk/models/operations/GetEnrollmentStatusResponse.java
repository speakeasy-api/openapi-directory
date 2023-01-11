package openapisdk.models.operations;



public class GetEnrollmentStatusResponse {
    public Object accessDeniedException;
    public GetEnrollmentStatusResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEnrollmentStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEnrollmentStatusResponse getEnrollmentStatusResponse;
    public GetEnrollmentStatusResponse withGetEnrollmentStatusResponse(openapisdk.models.shared.GetEnrollmentStatusResponse getEnrollmentStatusResponse) {
        this.getEnrollmentStatusResponse = getEnrollmentStatusResponse;
        return this;
    }
    public Object internalServerException;
    public GetEnrollmentStatusResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public GetEnrollmentStatusResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingAuthenticationToken;
    public GetEnrollmentStatusResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object serviceUnavailableException;
    public GetEnrollmentStatusResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetEnrollmentStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetEnrollmentStatusResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}