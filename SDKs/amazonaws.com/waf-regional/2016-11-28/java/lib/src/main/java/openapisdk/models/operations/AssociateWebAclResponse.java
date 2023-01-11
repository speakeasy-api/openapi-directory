package openapisdk.models.operations;



public class AssociateWebAclResponse {
    public java.util.Map<String, Object> associateWebACLResponse;
    public AssociateWebAclResponse withAssociateWebAclResponse(java.util.Map<String, Object> associateWebACLResponse) {
        this.associateWebACLResponse = associateWebACLResponse;
        return this;
    }
    public String contentType;
    public AssociateWebAclResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AssociateWebAclResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public AssociateWebAclResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public AssociateWebAclResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidParameterException;
    public AssociateWebAclResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafNonexistentItemException;
    public AssociateWebAclResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafUnavailableEntityException;
    public AssociateWebAclResponse withWafUnavailableEntityException(Object wafUnavailableEntityException) {
        this.wafUnavailableEntityException = wafUnavailableEntityException;
        return this;
    }
}