package openapisdk.models.operations;



public class ListByteMatchSetsResponse {
    public String contentType;
    public ListByteMatchSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListByteMatchSetsResponse listByteMatchSetsResponse;
    public ListByteMatchSetsResponse withListByteMatchSetsResponse(openapisdk.models.shared.ListByteMatchSetsResponse listByteMatchSetsResponse) {
        this.listByteMatchSetsResponse = listByteMatchSetsResponse;
        return this;
    }
    public Long statusCode;
    public ListByteMatchSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListByteMatchSetsResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public ListByteMatchSetsResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
}