package openapisdk.models.operations;



public class ListTagsForStreamResponse {
    public String contentType;
    public ListTagsForStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public ListTagsForStreamResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public ListTagsForStreamResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListTagsForStreamOutput listTagsForStreamOutput;
    public ListTagsForStreamResponse withListTagsForStreamOutput(openapisdk.models.shared.ListTagsForStreamOutput listTagsForStreamOutput) {
        this.listTagsForStreamOutput = listTagsForStreamOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTagsForStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTagsForStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}