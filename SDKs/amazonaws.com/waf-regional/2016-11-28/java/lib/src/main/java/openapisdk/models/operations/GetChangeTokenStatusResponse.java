package openapisdk.models.operations;



public class GetChangeTokenStatusResponse {
    public String contentType;
    public GetChangeTokenStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetChangeTokenStatusResponse getChangeTokenStatusResponse;
    public GetChangeTokenStatusResponse withGetChangeTokenStatusResponse(openapisdk.models.shared.GetChangeTokenStatusResponse getChangeTokenStatusResponse) {
        this.getChangeTokenStatusResponse = getChangeTokenStatusResponse;
        return this;
    }
    public Long statusCode;
    public GetChangeTokenStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetChangeTokenStatusResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetChangeTokenStatusResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}