package openapisdk.models.operations;



public class DeleteDeliveryChannelResponse {
    public String contentType;
    public DeleteDeliveryChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object lastDeliveryChannelDeleteFailedException;
    public DeleteDeliveryChannelResponse withLastDeliveryChannelDeleteFailedException(Object lastDeliveryChannelDeleteFailedException) {
        this.lastDeliveryChannelDeleteFailedException = lastDeliveryChannelDeleteFailedException;
        return this;
    }
    public Object noSuchDeliveryChannelException;
    public DeleteDeliveryChannelResponse withNoSuchDeliveryChannelException(Object noSuchDeliveryChannelException) {
        this.noSuchDeliveryChannelException = noSuchDeliveryChannelException;
        return this;
    }
    public Long statusCode;
    public DeleteDeliveryChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}