package openapisdk.models.operations;



public class StartDeliveryStreamEncryptionResponse {
    public String contentType;
    public StartDeliveryStreamEncryptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public StartDeliveryStreamEncryptionResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidKMSResourceException;
    public StartDeliveryStreamEncryptionResponse withInvalidKmsResourceException(Object invalidKMSResourceException) {
        this.invalidKMSResourceException = invalidKMSResourceException;
        return this;
    }
    public Object limitExceededException;
    public StartDeliveryStreamEncryptionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public StartDeliveryStreamEncryptionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartDeliveryStreamEncryptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> startDeliveryStreamEncryptionOutput;
    public StartDeliveryStreamEncryptionResponse withStartDeliveryStreamEncryptionOutput(java.util.Map<String, Object> startDeliveryStreamEncryptionOutput) {
        this.startDeliveryStreamEncryptionOutput = startDeliveryStreamEncryptionOutput;
        return this;
    }
    public Long statusCode;
    public StartDeliveryStreamEncryptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}