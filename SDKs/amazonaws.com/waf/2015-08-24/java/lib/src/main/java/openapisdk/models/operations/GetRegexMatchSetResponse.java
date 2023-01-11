package openapisdk.models.operations;



public class GetRegexMatchSetResponse {
    public String contentType;
    public GetRegexMatchSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRegexMatchSetResponse getRegexMatchSetResponse;
    public GetRegexMatchSetResponse withGetRegexMatchSetResponse(openapisdk.models.shared.GetRegexMatchSetResponse getRegexMatchSetResponse) {
        this.getRegexMatchSetResponse = getRegexMatchSetResponse;
        return this;
    }
    public Long statusCode;
    public GetRegexMatchSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetRegexMatchSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public GetRegexMatchSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetRegexMatchSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}