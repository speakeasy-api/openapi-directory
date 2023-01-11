package openapisdk.models.operations;



public class PostMessagesResponse {
    public String contentType;
    public PostMessagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageEntity messageEntity;
    public PostMessagesResponse withMessageEntity(openapisdk.models.shared.MessageEntity messageEntity) {
        this.messageEntity = messageEntity;
        return this;
    }
    public Long statusCode;
    public PostMessagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}