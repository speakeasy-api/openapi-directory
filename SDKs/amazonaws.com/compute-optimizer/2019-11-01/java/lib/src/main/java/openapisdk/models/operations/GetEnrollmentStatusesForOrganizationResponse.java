package openapisdk.models.operations;



public class GetEnrollmentStatusesForOrganizationResponse {
    public Object accessDeniedException;
    public GetEnrollmentStatusesForOrganizationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEnrollmentStatusesForOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEnrollmentStatusesForOrganizationResponse getEnrollmentStatusesForOrganizationResponse;
    public GetEnrollmentStatusesForOrganizationResponse withGetEnrollmentStatusesForOrganizationResponse(openapisdk.models.shared.GetEnrollmentStatusesForOrganizationResponse getEnrollmentStatusesForOrganizationResponse) {
        this.getEnrollmentStatusesForOrganizationResponse = getEnrollmentStatusesForOrganizationResponse;
        return this;
    }
    public Object internalServerException;
    public GetEnrollmentStatusesForOrganizationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public GetEnrollmentStatusesForOrganizationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingAuthenticationToken;
    public GetEnrollmentStatusesForOrganizationResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object serviceUnavailableException;
    public GetEnrollmentStatusesForOrganizationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetEnrollmentStatusesForOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetEnrollmentStatusesForOrganizationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}