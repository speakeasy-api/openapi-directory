package openapisdk.models.operations;



public class DeleteAclResponse {
    public Object aclNotFoundFault;
    public DeleteAclResponse withAclNotFoundFault(Object aclNotFoundFault) {
        this.aclNotFoundFault = aclNotFoundFault;
        return this;
    }
    public String contentType;
    public DeleteAclResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteAclResponse deleteACLResponse;
    public DeleteAclResponse withDeleteAclResponse(openapisdk.models.shared.DeleteAclResponse deleteACLResponse) {
        this.deleteACLResponse = deleteACLResponse;
        return this;
    }
    public Object invalidACLStateFault;
    public DeleteAclResponse withInvalidAclStateFault(Object invalidACLStateFault) {
        this.invalidACLStateFault = invalidACLStateFault;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteAclResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public DeleteAclResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}