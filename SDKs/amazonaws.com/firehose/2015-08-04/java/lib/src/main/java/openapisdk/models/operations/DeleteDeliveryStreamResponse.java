package openapisdk.models.operations;



public class DeleteDeliveryStreamResponse {
    public String contentType;
    public DeleteDeliveryStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteDeliveryStreamOutput;
    public DeleteDeliveryStreamResponse withDeleteDeliveryStreamOutput(java.util.Map<String, Object> deleteDeliveryStreamOutput) {
        this.deleteDeliveryStreamOutput = deleteDeliveryStreamOutput;
        return this;
    }
    public Object resourceInUseException;
    public DeleteDeliveryStreamResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteDeliveryStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteDeliveryStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}