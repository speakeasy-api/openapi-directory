package openapisdk.models.operations;



public class ListTagsForResourceResponse {
    public String contentType;
    public ListTagsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTagsForResourceResponse listTagsForResourceResponse;
    public ListTagsForResourceResponse withListTagsForResourceResponse(openapisdk.models.shared.ListTagsForResourceResponse listTagsForResourceResponse) {
        this.listTagsForResourceResponse = listTagsForResourceResponse;
        return this;
    }
    public Long statusCode;
    public ListTagsForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafBadRequestException;
    public ListTagsForResourceResponse withWafBadRequestException(Object wafBadRequestException) {
        this.wafBadRequestException = wafBadRequestException;
        return this;
    }
    public Object wafInternalErrorException;
    public ListTagsForResourceResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidParameterException;
    public ListTagsForResourceResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafNonexistentItemException;
    public ListTagsForResourceResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafTagOperationException;
    public ListTagsForResourceResponse withWafTagOperationException(Object wafTagOperationException) {
        this.wafTagOperationException = wafTagOperationException;
        return this;
    }
    public Object wafTagOperationInternalErrorException;
    public ListTagsForResourceResponse withWafTagOperationInternalErrorException(Object wafTagOperationInternalErrorException) {
        this.wafTagOperationInternalErrorException = wafTagOperationInternalErrorException;
        return this;
    }
}