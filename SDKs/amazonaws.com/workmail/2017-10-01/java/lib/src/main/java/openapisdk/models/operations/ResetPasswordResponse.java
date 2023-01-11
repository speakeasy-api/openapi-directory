package openapisdk.models.operations;



public class ResetPasswordResponse {
    public String contentType;
    public ResetPasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryServiceAuthenticationFailedException;
    public ResetPasswordResponse withDirectoryServiceAuthenticationFailedException(Object directoryServiceAuthenticationFailedException) {
        this.directoryServiceAuthenticationFailedException = directoryServiceAuthenticationFailedException;
        return this;
    }
    public Object directoryUnavailableException;
    public ResetPasswordResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object entityNotFoundException;
    public ResetPasswordResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public ResetPasswordResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public ResetPasswordResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidPasswordException;
    public ResetPasswordResponse withInvalidPasswordException(Object invalidPasswordException) {
        this.invalidPasswordException = invalidPasswordException;
        return this;
    }
    public Object organizationNotFoundException;
    public ResetPasswordResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public ResetPasswordResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public java.util.Map<String, Object> resetPasswordResponse;
    public ResetPasswordResponse withResetPasswordResponse(java.util.Map<String, Object> resetPasswordResponse) {
        this.resetPasswordResponse = resetPasswordResponse;
        return this;
    }
    public Long statusCode;
    public ResetPasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public ResetPasswordResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}