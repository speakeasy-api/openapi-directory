package openapisdk.models.operations;



public class GetWebAclForResourceResponse {
    public String contentType;
    public GetWebAclForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetWebAclForResourceResponse getWebACLForResourceResponse;
    public GetWebAclForResourceResponse withGetWebAclForResourceResponse(openapisdk.models.shared.GetWebAclForResourceResponse getWebACLForResourceResponse) {
        this.getWebACLForResourceResponse = getWebACLForResourceResponse;
        return this;
    }
    public Long statusCode;
    public GetWebAclForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetWebAclForResourceResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public GetWebAclForResourceResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidParameterException;
    public GetWebAclForResourceResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetWebAclForResourceResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafUnavailableEntityException;
    public GetWebAclForResourceResponse withWafUnavailableEntityException(Object wafUnavailableEntityException) {
        this.wafUnavailableEntityException = wafUnavailableEntityException;
        return this;
    }
}