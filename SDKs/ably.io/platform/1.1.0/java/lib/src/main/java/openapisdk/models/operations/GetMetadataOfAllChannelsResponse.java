package openapisdk.models.operations;



public class GetMetadataOfAllChannelsResponse {
    public byte[] body;
    public GetMetadataOfAllChannelsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMetadataOfAllChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMetadataOfAllChannelsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMetadataOfAllChannelsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetMetadataOfAllChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getMetadataOfAllChannels2XXApplicationJSONOneOf;
    public GetMetadataOfAllChannelsResponse withGetMetadataOfAllChannels2XxApplicationJsonOneOf(Object getMetadataOfAllChannels2XXApplicationJSONOneOf) {
        this.getMetadataOfAllChannels2XXApplicationJSONOneOf = getMetadataOfAllChannels2XXApplicationJSONOneOf;
        return this;
    }
    public String getMetadataOfAllChannels2XXTextHTMLString;
    public GetMetadataOfAllChannelsResponse withGetMetadataOfAllChannels2XxTextHtmlString(String getMetadataOfAllChannels2XXTextHTMLString) {
        this.getMetadataOfAllChannels2XXTextHTMLString = getMetadataOfAllChannels2XXTextHTMLString;
        return this;
    }
}