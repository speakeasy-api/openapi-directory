package openapisdk.models.operations;



public class UpdateAclResponse {
    public Object aclNotFoundFault;
    public UpdateAclResponse withAclNotFoundFault(Object aclNotFoundFault) {
        this.aclNotFoundFault = aclNotFoundFault;
        return this;
    }
    public String contentType;
    public UpdateAclResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object defaultUserRequired;
    public UpdateAclResponse withDefaultUserRequired(Object defaultUserRequired) {
        this.defaultUserRequired = defaultUserRequired;
        return this;
    }
    public Object duplicateUserNameFault;
    public UpdateAclResponse withDuplicateUserNameFault(Object duplicateUserNameFault) {
        this.duplicateUserNameFault = duplicateUserNameFault;
        return this;
    }
    public Object invalidACLStateFault;
    public UpdateAclResponse withInvalidAclStateFault(Object invalidACLStateFault) {
        this.invalidACLStateFault = invalidACLStateFault;
        return this;
    }
    public Object invalidParameterCombinationException;
    public UpdateAclResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateAclResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public UpdateAclResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateAclResponse updateACLResponse;
    public UpdateAclResponse withUpdateAclResponse(openapisdk.models.shared.UpdateAclResponse updateACLResponse) {
        this.updateACLResponse = updateACLResponse;
        return this;
    }
    public Object userNotFoundFault;
    public UpdateAclResponse withUserNotFoundFault(Object userNotFoundFault) {
        this.userNotFoundFault = userNotFoundFault;
        return this;
    }
}