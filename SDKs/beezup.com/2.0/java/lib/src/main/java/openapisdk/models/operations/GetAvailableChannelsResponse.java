package openapisdk.models.operations;



public class GetAvailableChannelsResponse {
    public String contentType;
    public GetAvailableChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAvailableChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChannelHeader[] channelHeaders;
    public GetAvailableChannelsResponse withChannelHeaders(openapisdk.models.shared.ChannelHeader[] channelHeaders) {
        this.channelHeaders = channelHeaders;
        return this;
    }
}