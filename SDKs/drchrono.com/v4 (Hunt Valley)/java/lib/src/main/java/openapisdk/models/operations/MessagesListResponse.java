package openapisdk.models.operations;



public class MessagesListResponse {
    public String contentType;
    public MessagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MessagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public MessagesList200ApplicationJson messagesList200ApplicationJSONObject;
    public MessagesListResponse withMessagesList200ApplicationJsonObject(MessagesList200ApplicationJson messagesList200ApplicationJSONObject) {
        this.messagesList200ApplicationJSONObject = messagesList200ApplicationJSONObject;
        return this;
    }
}