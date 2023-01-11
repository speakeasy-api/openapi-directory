package openapisdk.models.operations;



public class StopDeliveryStreamEncryptionResponse {
    public String contentType;
    public StopDeliveryStreamEncryptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public StopDeliveryStreamEncryptionResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public StopDeliveryStreamEncryptionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public StopDeliveryStreamEncryptionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopDeliveryStreamEncryptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopDeliveryStreamEncryptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopDeliveryStreamEncryptionOutput;
    public StopDeliveryStreamEncryptionResponse withStopDeliveryStreamEncryptionOutput(java.util.Map<String, Object> stopDeliveryStreamEncryptionOutput) {
        this.stopDeliveryStreamEncryptionOutput = stopDeliveryStreamEncryptionOutput;
        return this;
    }
}