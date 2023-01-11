package openapisdk.models.operations;



public class GetSizeConstraintSetResponse {
    public String contentType;
    public GetSizeConstraintSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSizeConstraintSetResponse getSizeConstraintSetResponse;
    public GetSizeConstraintSetResponse withGetSizeConstraintSetResponse(openapisdk.models.shared.GetSizeConstraintSetResponse getSizeConstraintSetResponse) {
        this.getSizeConstraintSetResponse = getSizeConstraintSetResponse;
        return this;
    }
    public Long statusCode;
    public GetSizeConstraintSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetSizeConstraintSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public GetSizeConstraintSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetSizeConstraintSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}