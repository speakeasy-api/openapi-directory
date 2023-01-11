package openapisdk.models.operations;



public class GetLicenseUsageResponse {
    public Object accessDeniedException;
    public GetLicenseUsageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public GetLicenseUsageResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public GetLicenseUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLicenseUsageResponse getLicenseUsageResponse;
    public GetLicenseUsageResponse withGetLicenseUsageResponse(openapisdk.models.shared.GetLicenseUsageResponse getLicenseUsageResponse) {
        this.getLicenseUsageResponse = getLicenseUsageResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetLicenseUsageResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public GetLicenseUsageResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public GetLicenseUsageResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public GetLicenseUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetLicenseUsageResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}