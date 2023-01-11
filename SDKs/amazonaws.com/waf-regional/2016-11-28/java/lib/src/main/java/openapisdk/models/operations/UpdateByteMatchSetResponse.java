package openapisdk.models.operations;



public class UpdateByteMatchSetResponse {
    public String contentType;
    public UpdateByteMatchSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateByteMatchSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateByteMatchSetResponse updateByteMatchSetResponse;
    public UpdateByteMatchSetResponse withUpdateByteMatchSetResponse(openapisdk.models.shared.UpdateByteMatchSetResponse updateByteMatchSetResponse) {
        this.updateByteMatchSetResponse = updateByteMatchSetResponse;
        return this;
    }
    public Object wafInternalErrorException;
    public UpdateByteMatchSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public UpdateByteMatchSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidOperationException;
    public UpdateByteMatchSetResponse withWafInvalidOperationException(Object wafInvalidOperationException) {
        this.wafInvalidOperationException = wafInvalidOperationException;
        return this;
    }
    public Object wafInvalidParameterException;
    public UpdateByteMatchSetResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafLimitsExceededException;
    public UpdateByteMatchSetResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafNonexistentContainerException;
    public UpdateByteMatchSetResponse withWafNonexistentContainerException(Object wafNonexistentContainerException) {
        this.wafNonexistentContainerException = wafNonexistentContainerException;
        return this;
    }
    public Object wafNonexistentItemException;
    public UpdateByteMatchSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafStaleDataException;
    public UpdateByteMatchSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}