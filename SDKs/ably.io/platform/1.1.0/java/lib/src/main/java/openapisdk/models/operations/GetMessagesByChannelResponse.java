package openapisdk.models.operations;



public class GetMessagesByChannelResponse {
    public byte[] body;
    public GetMessagesByChannelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMessagesByChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMessagesByChannelResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Message[] messages;
    public GetMessagesByChannelResponse withMessages(openapisdk.models.shared.Message[] messages) {
        this.messages = messages;
        return this;
    }
    public Long statusCode;
    public GetMessagesByChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getMessagesByChannel2XXTextHTMLString;
    public GetMessagesByChannelResponse withGetMessagesByChannel2XxTextHtmlString(String getMessagesByChannel2XXTextHTMLString) {
        this.getMessagesByChannel2XXTextHTMLString = getMessagesByChannel2XXTextHTMLString;
        return this;
    }
}