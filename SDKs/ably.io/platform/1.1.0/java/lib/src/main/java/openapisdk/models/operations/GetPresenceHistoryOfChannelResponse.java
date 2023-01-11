package openapisdk.models.operations;



public class GetPresenceHistoryOfChannelResponse {
    public byte[] body;
    public GetPresenceHistoryOfChannelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPresenceHistoryOfChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetPresenceHistoryOfChannelResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPresenceHistoryOfChannelResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PresenceMessage[] presenceMessages;
    public GetPresenceHistoryOfChannelResponse withPresenceMessages(openapisdk.models.shared.PresenceMessage[] presenceMessages) {
        this.presenceMessages = presenceMessages;
        return this;
    }
    public Long statusCode;
    public GetPresenceHistoryOfChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getPresenceHistoryOfChannel2XXTextHTMLString;
    public GetPresenceHistoryOfChannelResponse withGetPresenceHistoryOfChannel2XxTextHtmlString(String getPresenceHistoryOfChannel2XXTextHTMLString) {
        this.getPresenceHistoryOfChannel2XXTextHTMLString = getPresenceHistoryOfChannel2XXTextHTMLString;
        return this;
    }
}