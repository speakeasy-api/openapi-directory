package openapisdk.models.operations;



public class TagDeliveryStreamResponse {
    public String contentType;
    public TagDeliveryStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public TagDeliveryStreamResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public TagDeliveryStreamResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public TagDeliveryStreamResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public TagDeliveryStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public TagDeliveryStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> tagDeliveryStreamOutput;
    public TagDeliveryStreamResponse withTagDeliveryStreamOutput(java.util.Map<String, Object> tagDeliveryStreamOutput) {
        this.tagDeliveryStreamOutput = tagDeliveryStreamOutput;
        return this;
    }
}