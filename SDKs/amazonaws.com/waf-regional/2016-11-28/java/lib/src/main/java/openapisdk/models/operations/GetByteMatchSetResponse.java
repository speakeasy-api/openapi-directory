package openapisdk.models.operations;



public class GetByteMatchSetResponse {
    public String contentType;
    public GetByteMatchSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetByteMatchSetResponse getByteMatchSetResponse;
    public GetByteMatchSetResponse withGetByteMatchSetResponse(openapisdk.models.shared.GetByteMatchSetResponse getByteMatchSetResponse) {
        this.getByteMatchSetResponse = getByteMatchSetResponse;
        return this;
    }
    public Long statusCode;
    public GetByteMatchSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetByteMatchSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public GetByteMatchSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetByteMatchSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}