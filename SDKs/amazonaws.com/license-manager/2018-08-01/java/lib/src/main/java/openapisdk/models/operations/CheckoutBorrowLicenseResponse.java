package openapisdk.models.operations;



public class CheckoutBorrowLicenseResponse {
    public Object accessDeniedException;
    public CheckoutBorrowLicenseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public CheckoutBorrowLicenseResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public openapisdk.models.shared.CheckoutBorrowLicenseResponse checkoutBorrowLicenseResponse;
    public CheckoutBorrowLicenseResponse withCheckoutBorrowLicenseResponse(openapisdk.models.shared.CheckoutBorrowLicenseResponse checkoutBorrowLicenseResponse) {
        this.checkoutBorrowLicenseResponse = checkoutBorrowLicenseResponse;
        return this;
    }
    public String contentType;
    public CheckoutBorrowLicenseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entitlementNotAllowedException;
    public CheckoutBorrowLicenseResponse withEntitlementNotAllowedException(Object entitlementNotAllowedException) {
        this.entitlementNotAllowedException = entitlementNotAllowedException;
        return this;
    }
    public Object invalidParameterValueException;
    public CheckoutBorrowLicenseResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noEntitlementsAllowedException;
    public CheckoutBorrowLicenseResponse withNoEntitlementsAllowedException(Object noEntitlementsAllowedException) {
        this.noEntitlementsAllowedException = noEntitlementsAllowedException;
        return this;
    }
    public Object rateLimitExceededException;
    public CheckoutBorrowLicenseResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object redirectException;
    public CheckoutBorrowLicenseResponse withRedirectException(Object redirectException) {
        this.redirectException = redirectException;
        return this;
    }
    public Object resourceNotFoundException;
    public CheckoutBorrowLicenseResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public CheckoutBorrowLicenseResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public CheckoutBorrowLicenseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedDigitalSignatureMethodException;
    public CheckoutBorrowLicenseResponse withUnsupportedDigitalSignatureMethodException(Object unsupportedDigitalSignatureMethodException) {
        this.unsupportedDigitalSignatureMethodException = unsupportedDigitalSignatureMethodException;
        return this;
    }
    public Object validationException;
    public CheckoutBorrowLicenseResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}