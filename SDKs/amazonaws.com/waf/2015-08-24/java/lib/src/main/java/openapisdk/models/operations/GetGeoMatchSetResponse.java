package openapisdk.models.operations;



public class GetGeoMatchSetResponse {
    public String contentType;
    public GetGeoMatchSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGeoMatchSetResponse getGeoMatchSetResponse;
    public GetGeoMatchSetResponse withGetGeoMatchSetResponse(openapisdk.models.shared.GetGeoMatchSetResponse getGeoMatchSetResponse) {
        this.getGeoMatchSetResponse = getGeoMatchSetResponse;
        return this;
    }
    public Long statusCode;
    public GetGeoMatchSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetGeoMatchSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public GetGeoMatchSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetGeoMatchSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}