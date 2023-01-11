package openapisdk.models.operations;



public class StartConfigurationRecorderResponse {
    public String contentType;
    public StartConfigurationRecorderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object noAvailableDeliveryChannelException;
    public StartConfigurationRecorderResponse withNoAvailableDeliveryChannelException(Object noAvailableDeliveryChannelException) {
        this.noAvailableDeliveryChannelException = noAvailableDeliveryChannelException;
        return this;
    }
    public Object noSuchConfigurationRecorderException;
    public StartConfigurationRecorderResponse withNoSuchConfigurationRecorderException(Object noSuchConfigurationRecorderException) {
        this.noSuchConfigurationRecorderException = noSuchConfigurationRecorderException;
        return this;
    }
    public Long statusCode;
    public StartConfigurationRecorderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}