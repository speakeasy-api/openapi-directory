package openapisdk.models.operations;



public class GetMessagesResponse {
    public String contentType;
    public GetMessagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMessagesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Message[] messages;
    public GetMessagesResponse withMessages(openapisdk.models.shared.Message[] messages) {
        this.messages = messages;
        return this;
    }
    public Long statusCode;
    public GetMessagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}