package openapisdk.models.operations;



public class DisassociateWebAclResponse {
    public String contentType;
    public DisassociateWebAclResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateWebACLResponse;
    public DisassociateWebAclResponse withDisassociateWebAclResponse(java.util.Map<String, Object> disassociateWebACLResponse) {
        this.disassociateWebACLResponse = disassociateWebACLResponse;
        return this;
    }
    public Long statusCode;
    public DisassociateWebAclResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public DisassociateWebAclResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public DisassociateWebAclResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidParameterException;
    public DisassociateWebAclResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafNonexistentItemException;
    public DisassociateWebAclResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}