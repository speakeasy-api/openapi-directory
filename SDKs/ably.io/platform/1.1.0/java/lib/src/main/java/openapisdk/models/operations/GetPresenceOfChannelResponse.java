package openapisdk.models.operations;



public class GetPresenceOfChannelResponse {
    public byte[] body;
    public GetPresenceOfChannelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPresenceOfChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetPresenceOfChannelResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPresenceOfChannelResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PresenceMessage[] presenceMessages;
    public GetPresenceOfChannelResponse withPresenceMessages(openapisdk.models.shared.PresenceMessage[] presenceMessages) {
        this.presenceMessages = presenceMessages;
        return this;
    }
    public Long statusCode;
    public GetPresenceOfChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getPresenceOfChannel200TextHTMLString;
    public GetPresenceOfChannelResponse withGetPresenceOfChannel200TextHtmlString(String getPresenceOfChannel200TextHTMLString) {
        this.getPresenceOfChannel200TextHTMLString = getPresenceOfChannel200TextHTMLString;
        return this;
    }
}