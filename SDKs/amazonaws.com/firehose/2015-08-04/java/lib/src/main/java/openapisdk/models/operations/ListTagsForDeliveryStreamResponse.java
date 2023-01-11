package openapisdk.models.operations;



public class ListTagsForDeliveryStreamResponse {
    public String contentType;
    public ListTagsForDeliveryStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public ListTagsForDeliveryStreamResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public ListTagsForDeliveryStreamResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListTagsForDeliveryStreamOutput listTagsForDeliveryStreamOutput;
    public ListTagsForDeliveryStreamResponse withListTagsForDeliveryStreamOutput(openapisdk.models.shared.ListTagsForDeliveryStreamOutput listTagsForDeliveryStreamOutput) {
        this.listTagsForDeliveryStreamOutput = listTagsForDeliveryStreamOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTagsForDeliveryStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTagsForDeliveryStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}