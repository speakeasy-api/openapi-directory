package openapisdk.models.operations;



public class ListRegexMatchSetsResponse {
    public String contentType;
    public ListRegexMatchSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRegexMatchSetsResponse listRegexMatchSetsResponse;
    public ListRegexMatchSetsResponse withListRegexMatchSetsResponse(openapisdk.models.shared.ListRegexMatchSetsResponse listRegexMatchSetsResponse) {
        this.listRegexMatchSetsResponse = listRegexMatchSetsResponse;
        return this;
    }
    public Long statusCode;
    public ListRegexMatchSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListRegexMatchSetsResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public ListRegexMatchSetsResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
}