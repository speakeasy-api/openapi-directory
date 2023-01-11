package openapisdk.models.operations;



public class ExtendLicenseConsumptionResponse {
    public Object accessDeniedException;
    public ExtendLicenseConsumptionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ExtendLicenseConsumptionResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ExtendLicenseConsumptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExtendLicenseConsumptionResponse extendLicenseConsumptionResponse;
    public ExtendLicenseConsumptionResponse withExtendLicenseConsumptionResponse(openapisdk.models.shared.ExtendLicenseConsumptionResponse extendLicenseConsumptionResponse) {
        this.extendLicenseConsumptionResponse = extendLicenseConsumptionResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public ExtendLicenseConsumptionResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public ExtendLicenseConsumptionResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public ExtendLicenseConsumptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public ExtendLicenseConsumptionResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ExtendLicenseConsumptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ExtendLicenseConsumptionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}