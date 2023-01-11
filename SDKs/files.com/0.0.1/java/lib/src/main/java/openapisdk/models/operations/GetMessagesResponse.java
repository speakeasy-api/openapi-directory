package openapisdk.models.operations;



public class GetMessagesResponse {
    public String contentType;
    public GetMessagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageEntity[] messageEntities;
    public GetMessagesResponse withMessageEntities(openapisdk.models.shared.MessageEntity[] messageEntities) {
        this.messageEntities = messageEntities;
        return this;
    }
    public Long statusCode;
    public GetMessagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}