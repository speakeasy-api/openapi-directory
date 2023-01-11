package openapisdk.models.operations;



public class UntagDeliveryStreamResponse {
    public String contentType;
    public UntagDeliveryStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public UntagDeliveryStreamResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public UntagDeliveryStreamResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public UntagDeliveryStreamResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UntagDeliveryStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UntagDeliveryStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> untagDeliveryStreamOutput;
    public UntagDeliveryStreamResponse withUntagDeliveryStreamOutput(java.util.Map<String, Object> untagDeliveryStreamOutput) {
        this.untagDeliveryStreamOutput = untagDeliveryStreamOutput;
        return this;
    }
}