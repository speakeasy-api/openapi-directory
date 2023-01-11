package openapisdk.models.operations;



public class GetXssMatchSetResponse {
    public String contentType;
    public GetXssMatchSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetXssMatchSetResponse getXssMatchSetResponse;
    public GetXssMatchSetResponse withGetXssMatchSetResponse(openapisdk.models.shared.GetXssMatchSetResponse getXssMatchSetResponse) {
        this.getXssMatchSetResponse = getXssMatchSetResponse;
        return this;
    }
    public Long statusCode;
    public GetXssMatchSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetXssMatchSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public GetXssMatchSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetXssMatchSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}