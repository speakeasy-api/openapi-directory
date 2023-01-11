package openapisdk.models.operations;



public class UpdatePrimaryEmailAddressResponse {
    public String contentType;
    public UpdatePrimaryEmailAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryServiceAuthenticationFailedException;
    public UpdatePrimaryEmailAddressResponse withDirectoryServiceAuthenticationFailedException(Object directoryServiceAuthenticationFailedException) {
        this.directoryServiceAuthenticationFailedException = directoryServiceAuthenticationFailedException;
        return this;
    }
    public Object directoryUnavailableException;
    public UpdatePrimaryEmailAddressResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object emailAddressInUseException;
    public UpdatePrimaryEmailAddressResponse withEmailAddressInUseException(Object emailAddressInUseException) {
        this.emailAddressInUseException = emailAddressInUseException;
        return this;
    }
    public Object entityNotFoundException;
    public UpdatePrimaryEmailAddressResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public UpdatePrimaryEmailAddressResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public UpdatePrimaryEmailAddressResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object mailDomainNotFoundException;
    public UpdatePrimaryEmailAddressResponse withMailDomainNotFoundException(Object mailDomainNotFoundException) {
        this.mailDomainNotFoundException = mailDomainNotFoundException;
        return this;
    }
    public Object mailDomainStateException;
    public UpdatePrimaryEmailAddressResponse withMailDomainStateException(Object mailDomainStateException) {
        this.mailDomainStateException = mailDomainStateException;
        return this;
    }
    public Object organizationNotFoundException;
    public UpdatePrimaryEmailAddressResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public UpdatePrimaryEmailAddressResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public UpdatePrimaryEmailAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public UpdatePrimaryEmailAddressResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
    public java.util.Map<String, Object> updatePrimaryEmailAddressResponse;
    public UpdatePrimaryEmailAddressResponse withUpdatePrimaryEmailAddressResponse(java.util.Map<String, Object> updatePrimaryEmailAddressResponse) {
        this.updatePrimaryEmailAddressResponse = updatePrimaryEmailAddressResponse;
        return this;
    }
}