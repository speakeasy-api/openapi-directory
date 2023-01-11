package openapisdk.models.operations;



public class PublishMessagesToChannelResponse {
    public byte[] body;
    public PublishMessagesToChannelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PublishMessagesToChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PublishMessagesToChannelResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PublishMessagesToChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PublishMessagesToChannel2XxApplicationJson publishMessagesToChannel2XXApplicationJSONObject;
    public PublishMessagesToChannelResponse withPublishMessagesToChannel2XxApplicationJsonObject(PublishMessagesToChannel2XxApplicationJson publishMessagesToChannel2XXApplicationJSONObject) {
        this.publishMessagesToChannel2XXApplicationJSONObject = publishMessagesToChannel2XXApplicationJSONObject;
        return this;
    }
}