package openapisdk.models.operations;



public class PatchMessagesIdResponse {
    public String contentType;
    public PatchMessagesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageEntity messageEntity;
    public PatchMessagesIdResponse withMessageEntity(openapisdk.models.shared.MessageEntity messageEntity) {
        this.messageEntity = messageEntity;
        return this;
    }
    public Long statusCode;
    public PatchMessagesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}