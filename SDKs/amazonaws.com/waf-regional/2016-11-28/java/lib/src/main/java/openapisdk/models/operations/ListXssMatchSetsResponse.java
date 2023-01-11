package openapisdk.models.operations;



public class ListXssMatchSetsResponse {
    public String contentType;
    public ListXssMatchSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListXssMatchSetsResponse listXssMatchSetsResponse;
    public ListXssMatchSetsResponse withListXssMatchSetsResponse(openapisdk.models.shared.ListXssMatchSetsResponse listXssMatchSetsResponse) {
        this.listXssMatchSetsResponse = listXssMatchSetsResponse;
        return this;
    }
    public Long statusCode;
    public ListXssMatchSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListXssMatchSetsResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public ListXssMatchSetsResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
}