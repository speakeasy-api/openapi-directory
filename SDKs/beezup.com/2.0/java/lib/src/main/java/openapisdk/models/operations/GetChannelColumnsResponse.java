package openapisdk.models.operations;



public class GetChannelColumnsResponse {
    public String contentType;
    public GetChannelColumnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetChannelColumnsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetChannelColumnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChannelColumn[] channelColumns;
    public GetChannelColumnsResponse withChannelColumns(openapisdk.models.shared.ChannelColumn[] channelColumns) {
        this.channelColumns = channelColumns;
        return this;
    }
}