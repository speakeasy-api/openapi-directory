package openapisdk.models.operations;



public class DeleteGroupResponse {
    public String contentType;
    public DeleteGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteGroupResponse;
    public DeleteGroupResponse withDeleteGroupResponse(java.util.Map<String, Object> deleteGroupResponse) {
        this.deleteGroupResponse = deleteGroupResponse;
        return this;
    }
    public Object directoryServiceAuthenticationFailedException;
    public DeleteGroupResponse withDirectoryServiceAuthenticationFailedException(Object directoryServiceAuthenticationFailedException) {
        this.directoryServiceAuthenticationFailedException = directoryServiceAuthenticationFailedException;
        return this;
    }
    public Object directoryUnavailableException;
    public DeleteGroupResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object entityStateException;
    public DeleteGroupResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteGroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DeleteGroupResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DeleteGroupResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DeleteGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DeleteGroupResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}