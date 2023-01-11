package openapisdk.models.operations;



public class GetChannelsWithPushSubscribersResponse {
    public byte[] body;
    public GetChannelsWithPushSubscribersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetChannelsWithPushSubscribersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetChannelsWithPushSubscribersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetChannelsWithPushSubscribersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getChannelsWithPushSubscribers2XXApplicationJSONStrings;
    public GetChannelsWithPushSubscribersResponse withGetChannelsWithPushSubscribers2XxApplicationJsonStrings(String[] getChannelsWithPushSubscribers2XXApplicationJSONStrings) {
        this.getChannelsWithPushSubscribers2XXApplicationJSONStrings = getChannelsWithPushSubscribers2XXApplicationJSONStrings;
        return this;
    }
}