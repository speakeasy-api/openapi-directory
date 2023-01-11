package openapisdk.models.operations;



public class ListTagsResponse {
    public String contentType;
    public ListTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTagsResult listTagsResult;
    public ListTagsResponse withListTagsResult(openapisdk.models.shared.ListTagsResult listTagsResult) {
        this.listTagsResult = listTagsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTagsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListTagsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}