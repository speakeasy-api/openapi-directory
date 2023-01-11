package openapisdk.models.operations;



public class GetRegexPatternSetResponse {
    public String contentType;
    public GetRegexPatternSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRegexPatternSetResponse getRegexPatternSetResponse;
    public GetRegexPatternSetResponse withGetRegexPatternSetResponse(openapisdk.models.shared.GetRegexPatternSetResponse getRegexPatternSetResponse) {
        this.getRegexPatternSetResponse = getRegexPatternSetResponse;
        return this;
    }
    public Long statusCode;
    public GetRegexPatternSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetRegexPatternSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public GetRegexPatternSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetRegexPatternSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}