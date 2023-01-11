package openapisdk.models.operations;



public class ListSizeConstraintSetsResponse {
    public String contentType;
    public ListSizeConstraintSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSizeConstraintSetsResponse listSizeConstraintSetsResponse;
    public ListSizeConstraintSetsResponse withListSizeConstraintSetsResponse(openapisdk.models.shared.ListSizeConstraintSetsResponse listSizeConstraintSetsResponse) {
        this.listSizeConstraintSetsResponse = listSizeConstraintSetsResponse;
        return this;
    }
    public Long statusCode;
    public ListSizeConstraintSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListSizeConstraintSetsResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public ListSizeConstraintSetsResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
}