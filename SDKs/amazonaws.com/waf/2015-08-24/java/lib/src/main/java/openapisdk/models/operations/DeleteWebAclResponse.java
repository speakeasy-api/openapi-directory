package openapisdk.models.operations;



public class DeleteWebAclResponse {
    public String contentType;
    public DeleteWebAclResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteWebAclResponse deleteWebACLResponse;
    public DeleteWebAclResponse withDeleteWebAclResponse(openapisdk.models.shared.DeleteWebAclResponse deleteWebACLResponse) {
        this.deleteWebACLResponse = deleteWebACLResponse;
        return this;
    }
    public Long statusCode;
    public DeleteWebAclResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public DeleteWebAclResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public DeleteWebAclResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonEmptyEntityException;
    public DeleteWebAclResponse withWafNonEmptyEntityException(Object wafNonEmptyEntityException) {
        this.wafNonEmptyEntityException = wafNonEmptyEntityException;
        return this;
    }
    public Object wafNonexistentItemException;
    public DeleteWebAclResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafReferencedItemException;
    public DeleteWebAclResponse withWafReferencedItemException(Object wafReferencedItemException) {
        this.wafReferencedItemException = wafReferencedItemException;
        return this;
    }
    public Object wafStaleDataException;
    public DeleteWebAclResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
    public Object wafTagOperationException;
    public DeleteWebAclResponse withWafTagOperationException(Object wafTagOperationException) {
        this.wafTagOperationException = wafTagOperationException;
        return this;
    }
    public Object wafTagOperationInternalErrorException;
    public DeleteWebAclResponse withWafTagOperationInternalErrorException(Object wafTagOperationInternalErrorException) {
        this.wafTagOperationInternalErrorException = wafTagOperationInternalErrorException;
        return this;
    }
}