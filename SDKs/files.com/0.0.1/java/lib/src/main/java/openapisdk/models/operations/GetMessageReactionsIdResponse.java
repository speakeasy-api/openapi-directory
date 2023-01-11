package openapisdk.models.operations;



public class GetMessageReactionsIdResponse {
    public String contentType;
    public GetMessageReactionsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageReactionEntity messageReactionEntity;
    public GetMessageReactionsIdResponse withMessageReactionEntity(openapisdk.models.shared.MessageReactionEntity messageReactionEntity) {
        this.messageReactionEntity = messageReactionEntity;
        return this;
    }
    public Long statusCode;
    public GetMessageReactionsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}