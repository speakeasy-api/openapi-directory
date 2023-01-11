package openapisdk.models.operations;



public class GetMessagesIdResponse {
    public String contentType;
    public GetMessagesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageEntity messageEntity;
    public GetMessagesIdResponse withMessageEntity(openapisdk.models.shared.MessageEntity messageEntity) {
        this.messageEntity = messageEntity;
        return this;
    }
    public Long statusCode;
    public GetMessagesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}