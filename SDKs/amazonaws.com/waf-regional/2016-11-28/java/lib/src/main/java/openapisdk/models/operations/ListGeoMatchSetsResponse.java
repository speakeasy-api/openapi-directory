package openapisdk.models.operations;



public class ListGeoMatchSetsResponse {
    public String contentType;
    public ListGeoMatchSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGeoMatchSetsResponse listGeoMatchSetsResponse;
    public ListGeoMatchSetsResponse withListGeoMatchSetsResponse(openapisdk.models.shared.ListGeoMatchSetsResponse listGeoMatchSetsResponse) {
        this.listGeoMatchSetsResponse = listGeoMatchSetsResponse;
        return this;
    }
    public Long statusCode;
    public ListGeoMatchSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListGeoMatchSetsResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public ListGeoMatchSetsResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
}