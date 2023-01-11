package openapisdk.models.operations;



public class UpdateEnrollmentStatusResponse {
    public Object accessDeniedException;
    public UpdateEnrollmentStatusResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateEnrollmentStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateEnrollmentStatusResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateEnrollmentStatusResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingAuthenticationToken;
    public UpdateEnrollmentStatusResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object serviceUnavailableException;
    public UpdateEnrollmentStatusResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateEnrollmentStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateEnrollmentStatusResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateEnrollmentStatusResponse updateEnrollmentStatusResponse;
    public UpdateEnrollmentStatusResponse withUpdateEnrollmentStatusResponse(openapisdk.models.shared.UpdateEnrollmentStatusResponse updateEnrollmentStatusResponse) {
        this.updateEnrollmentStatusResponse = updateEnrollmentStatusResponse;
        return this;
    }
}