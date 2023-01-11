package openapisdk.models.operations;



public class RegisterToWorkMailResponse {
    public String contentType;
    public RegisterToWorkMailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryServiceAuthenticationFailedException;
    public RegisterToWorkMailResponse withDirectoryServiceAuthenticationFailedException(Object directoryServiceAuthenticationFailedException) {
        this.directoryServiceAuthenticationFailedException = directoryServiceAuthenticationFailedException;
        return this;
    }
    public Object directoryUnavailableException;
    public RegisterToWorkMailResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object emailAddressInUseException;
    public RegisterToWorkMailResponse withEmailAddressInUseException(Object emailAddressInUseException) {
        this.emailAddressInUseException = emailAddressInUseException;
        return this;
    }
    public Object entityAlreadyRegisteredException;
    public RegisterToWorkMailResponse withEntityAlreadyRegisteredException(Object entityAlreadyRegisteredException) {
        this.entityAlreadyRegisteredException = entityAlreadyRegisteredException;
        return this;
    }
    public Object entityNotFoundException;
    public RegisterToWorkMailResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public RegisterToWorkMailResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public RegisterToWorkMailResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object mailDomainNotFoundException;
    public RegisterToWorkMailResponse withMailDomainNotFoundException(Object mailDomainNotFoundException) {
        this.mailDomainNotFoundException = mailDomainNotFoundException;
        return this;
    }
    public Object mailDomainStateException;
    public RegisterToWorkMailResponse withMailDomainStateException(Object mailDomainStateException) {
        this.mailDomainStateException = mailDomainStateException;
        return this;
    }
    public Object organizationNotFoundException;
    public RegisterToWorkMailResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public RegisterToWorkMailResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public java.util.Map<String, Object> registerToWorkMailResponse;
    public RegisterToWorkMailResponse withRegisterToWorkMailResponse(java.util.Map<String, Object> registerToWorkMailResponse) {
        this.registerToWorkMailResponse = registerToWorkMailResponse;
        return this;
    }
    public Long statusCode;
    public RegisterToWorkMailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}