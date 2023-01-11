package openapisdk.models.operations;



public class CheckoutLicenseResponse {
    public Object accessDeniedException;
    public CheckoutLicenseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public CheckoutLicenseResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public openapisdk.models.shared.CheckoutLicenseResponse checkoutLicenseResponse;
    public CheckoutLicenseResponse withCheckoutLicenseResponse(openapisdk.models.shared.CheckoutLicenseResponse checkoutLicenseResponse) {
        this.checkoutLicenseResponse = checkoutLicenseResponse;
        return this;
    }
    public String contentType;
    public CheckoutLicenseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public CheckoutLicenseResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noEntitlementsAllowedException;
    public CheckoutLicenseResponse withNoEntitlementsAllowedException(Object noEntitlementsAllowedException) {
        this.noEntitlementsAllowedException = noEntitlementsAllowedException;
        return this;
    }
    public Object rateLimitExceededException;
    public CheckoutLicenseResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object redirectException;
    public CheckoutLicenseResponse withRedirectException(Object redirectException) {
        this.redirectException = redirectException;
        return this;
    }
    public Object resourceNotFoundException;
    public CheckoutLicenseResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public CheckoutLicenseResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public CheckoutLicenseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedDigitalSignatureMethodException;
    public CheckoutLicenseResponse withUnsupportedDigitalSignatureMethodException(Object unsupportedDigitalSignatureMethodException) {
        this.unsupportedDigitalSignatureMethodException = unsupportedDigitalSignatureMethodException;
        return this;
    }
    public Object validationException;
    public CheckoutLicenseResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}