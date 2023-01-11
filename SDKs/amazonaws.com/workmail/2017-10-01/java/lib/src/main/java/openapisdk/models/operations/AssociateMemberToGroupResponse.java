package openapisdk.models.operations;



public class AssociateMemberToGroupResponse {
    public java.util.Map<String, Object> associateMemberToGroupResponse;
    public AssociateMemberToGroupResponse withAssociateMemberToGroupResponse(java.util.Map<String, Object> associateMemberToGroupResponse) {
        this.associateMemberToGroupResponse = associateMemberToGroupResponse;
        return this;
    }
    public String contentType;
    public AssociateMemberToGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryServiceAuthenticationFailedException;
    public AssociateMemberToGroupResponse withDirectoryServiceAuthenticationFailedException(Object directoryServiceAuthenticationFailedException) {
        this.directoryServiceAuthenticationFailedException = directoryServiceAuthenticationFailedException;
        return this;
    }
    public Object directoryUnavailableException;
    public AssociateMemberToGroupResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object entityNotFoundException;
    public AssociateMemberToGroupResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public AssociateMemberToGroupResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public AssociateMemberToGroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public AssociateMemberToGroupResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public AssociateMemberToGroupResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public AssociateMemberToGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public AssociateMemberToGroupResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}