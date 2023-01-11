package openapisdk.models.operations;



public class ListTagsForResourceResponse {
    public String contentType;
    public ListTagsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListTagsForResourceResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidInputException;
    public ListTagsForResourceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidOperationException;
    public ListTagsForResourceResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public openapisdk.models.shared.ListTagsForResourceResponse listTagsForResourceResponse;
    public ListTagsForResourceResponse withListTagsForResourceResponse(openapisdk.models.shared.ListTagsForResourceResponse listTagsForResourceResponse) {
        this.listTagsForResourceResponse = listTagsForResourceResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTagsForResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTagsForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}