package openapisdk.models.operations;



public class CreateDeliveryStreamResponse {
    public String contentType;
    public CreateDeliveryStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDeliveryStreamOutput createDeliveryStreamOutput;
    public CreateDeliveryStreamResponse withCreateDeliveryStreamOutput(openapisdk.models.shared.CreateDeliveryStreamOutput createDeliveryStreamOutput) {
        this.createDeliveryStreamOutput = createDeliveryStreamOutput;
        return this;
    }
    public Object invalidArgumentException;
    public CreateDeliveryStreamResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidKMSResourceException;
    public CreateDeliveryStreamResponse withInvalidKmsResourceException(Object invalidKMSResourceException) {
        this.invalidKMSResourceException = invalidKMSResourceException;
        return this;
    }
    public Object limitExceededException;
    public CreateDeliveryStreamResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public CreateDeliveryStreamResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public CreateDeliveryStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}