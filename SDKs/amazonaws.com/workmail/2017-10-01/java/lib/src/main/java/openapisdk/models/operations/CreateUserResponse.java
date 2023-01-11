package openapisdk.models.operations;



public class CreateUserResponse {
    public String contentType;
    public CreateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateUserResponse createUserResponse;
    public CreateUserResponse withCreateUserResponse(openapisdk.models.shared.CreateUserResponse createUserResponse) {
        this.createUserResponse = createUserResponse;
        return this;
    }
    public Object directoryServiceAuthenticationFailedException;
    public CreateUserResponse withDirectoryServiceAuthenticationFailedException(Object directoryServiceAuthenticationFailedException) {
        this.directoryServiceAuthenticationFailedException = directoryServiceAuthenticationFailedException;
        return this;
    }
    public Object directoryUnavailableException;
    public CreateUserResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object invalidParameterException;
    public CreateUserResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidPasswordException;
    public CreateUserResponse withInvalidPasswordException(Object invalidPasswordException) {
        this.invalidPasswordException = invalidPasswordException;
        return this;
    }
    public Object nameAvailabilityException;
    public CreateUserResponse withNameAvailabilityException(Object nameAvailabilityException) {
        this.nameAvailabilityException = nameAvailabilityException;
        return this;
    }
    public Object organizationNotFoundException;
    public CreateUserResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public CreateUserResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Object reservedNameException;
    public CreateUserResponse withReservedNameException(Object reservedNameException) {
        this.reservedNameException = reservedNameException;
        return this;
    }
    public Long statusCode;
    public CreateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public CreateUserResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}