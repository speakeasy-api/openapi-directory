package openapisdk.models.operations;



public class GetV3AssetChangesChannelsResponse {
    public openapisdk.models.shared.Channel[] channels;
    public GetV3AssetChangesChannelsResponse withChannels(openapisdk.models.shared.Channel[] channels) {
        this.channels = channels;
        return this;
    }
    public String contentType;
    public GetV3AssetChangesChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV3AssetChangesChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}