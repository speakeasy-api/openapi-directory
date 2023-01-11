package openapisdk.models.operations;



public class DisassociateMemberFromGroupResponse {
    public String contentType;
    public DisassociateMemberFromGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryServiceAuthenticationFailedException;
    public DisassociateMemberFromGroupResponse withDirectoryServiceAuthenticationFailedException(Object directoryServiceAuthenticationFailedException) {
        this.directoryServiceAuthenticationFailedException = directoryServiceAuthenticationFailedException;
        return this;
    }
    public Object directoryUnavailableException;
    public DisassociateMemberFromGroupResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public java.util.Map<String, Object> disassociateMemberFromGroupResponse;
    public DisassociateMemberFromGroupResponse withDisassociateMemberFromGroupResponse(java.util.Map<String, Object> disassociateMemberFromGroupResponse) {
        this.disassociateMemberFromGroupResponse = disassociateMemberFromGroupResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DisassociateMemberFromGroupResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public DisassociateMemberFromGroupResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public DisassociateMemberFromGroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DisassociateMemberFromGroupResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DisassociateMemberFromGroupResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DisassociateMemberFromGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DisassociateMemberFromGroupResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}