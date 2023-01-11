package openapisdk.models.operations;



public class ListResourcesForWebAclResponse {
    public String contentType;
    public ListResourcesForWebAclResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListResourcesForWebAclResponse listResourcesForWebACLResponse;
    public ListResourcesForWebAclResponse withListResourcesForWebAclResponse(openapisdk.models.shared.ListResourcesForWebAclResponse listResourcesForWebACLResponse) {
        this.listResourcesForWebACLResponse = listResourcesForWebACLResponse;
        return this;
    }
    public Long statusCode;
    public ListResourcesForWebAclResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListResourcesForWebAclResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public ListResourcesForWebAclResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidParameterException;
    public ListResourcesForWebAclResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafNonexistentItemException;
    public ListResourcesForWebAclResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}