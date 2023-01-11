package openapisdk.models.operations;



public class GetLicenseResponse {
    public Object accessDeniedException;
    public GetLicenseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public GetLicenseResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public GetLicenseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLicenseResponse getLicenseResponse;
    public GetLicenseResponse withGetLicenseResponse(openapisdk.models.shared.GetLicenseResponse getLicenseResponse) {
        this.getLicenseResponse = getLicenseResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetLicenseResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public GetLicenseResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public GetLicenseResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public GetLicenseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetLicenseResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}