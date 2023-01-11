package openapisdk.models.operations;



public class GetIpSetResponse {
    public String contentType;
    public GetIpSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetIpSetResponse getIPSetResponse;
    public GetIpSetResponse withGetIpSetResponse(openapisdk.models.shared.GetIpSetResponse getIPSetResponse) {
        this.getIPSetResponse = getIPSetResponse;
        return this;
    }
    public Long statusCode;
    public GetIpSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetIpSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public GetIpSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetIpSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}