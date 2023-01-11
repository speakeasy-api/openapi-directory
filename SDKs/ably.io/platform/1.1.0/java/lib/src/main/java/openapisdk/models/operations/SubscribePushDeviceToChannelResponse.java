package openapisdk.models.operations;



public class SubscribePushDeviceToChannelResponse {
    public byte[] body;
    public SubscribePushDeviceToChannelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SubscribePushDeviceToChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public SubscribePushDeviceToChannelResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public SubscribePushDeviceToChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}