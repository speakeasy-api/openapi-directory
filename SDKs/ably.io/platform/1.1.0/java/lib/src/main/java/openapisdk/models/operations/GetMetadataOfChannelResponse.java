package openapisdk.models.operations;



public class GetMetadataOfChannelResponse {
    public byte[] body;
    public GetMetadataOfChannelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.ChannelDetails channelDetails;
    public GetMetadataOfChannelResponse withChannelDetails(openapisdk.models.shared.ChannelDetails channelDetails) {
        this.channelDetails = channelDetails;
        return this;
    }
    public String contentType;
    public GetMetadataOfChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMetadataOfChannelResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMetadataOfChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}