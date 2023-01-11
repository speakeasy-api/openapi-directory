package openapisdk.models.operations;



public class GetChannelInfoResponse {
    public String contentType;
    public GetChannelInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChannelInfo channelInfo;
    public GetChannelInfoResponse withChannelInfo(openapisdk.models.shared.ChannelInfo channelInfo) {
        this.channelInfo = channelInfo;
        return this;
    }
}