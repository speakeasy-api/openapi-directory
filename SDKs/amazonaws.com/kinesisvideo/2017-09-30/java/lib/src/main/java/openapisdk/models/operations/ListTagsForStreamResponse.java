package openapisdk.models.operations;



public class ListTagsForStreamResponse {
    public Object clientLimitExceededException;
    public ListTagsForStreamResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
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
    public Object invalidResourceFormatException;
    public ListTagsForStreamResponse withInvalidResourceFormatException(Object invalidResourceFormatException) {
        this.invalidResourceFormatException = invalidResourceFormatException;
        return this;
    }
    public openapisdk.models.shared.ListTagsForStreamOutput listTagsForStreamOutput;
    public ListTagsForStreamResponse withListTagsForStreamOutput(openapisdk.models.shared.ListTagsForStreamOutput listTagsForStreamOutput) {
        this.listTagsForStreamOutput = listTagsForStreamOutput;
        return this;
    }
    public Object notAuthorizedException;
    public ListTagsForStreamResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
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