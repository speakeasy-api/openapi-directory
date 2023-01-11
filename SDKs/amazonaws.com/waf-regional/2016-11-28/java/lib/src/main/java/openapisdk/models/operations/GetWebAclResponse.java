package openapisdk.models.operations;



public class GetWebAclResponse {
    public String contentType;
    public GetWebAclResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetWebAclResponse getWebACLResponse;
    public GetWebAclResponse withGetWebAclResponse(openapisdk.models.shared.GetWebAclResponse getWebACLResponse) {
        this.getWebACLResponse = getWebACLResponse;
        return this;
    }
    public Long statusCode;
    public GetWebAclResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetWebAclResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public GetWebAclResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetWebAclResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}