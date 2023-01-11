package openapisdk.models.operations;



public class ListRegexPatternSetsResponse {
    public String contentType;
    public ListRegexPatternSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRegexPatternSetsResponse listRegexPatternSetsResponse;
    public ListRegexPatternSetsResponse withListRegexPatternSetsResponse(openapisdk.models.shared.ListRegexPatternSetsResponse listRegexPatternSetsResponse) {
        this.listRegexPatternSetsResponse = listRegexPatternSetsResponse;
        return this;
    }
    public Long statusCode;
    public ListRegexPatternSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListRegexPatternSetsResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public ListRegexPatternSetsResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
}