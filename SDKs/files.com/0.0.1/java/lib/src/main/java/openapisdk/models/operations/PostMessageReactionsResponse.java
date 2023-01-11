package openapisdk.models.operations;



public class PostMessageReactionsResponse {
    public String contentType;
    public PostMessageReactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageReactionEntity messageReactionEntity;
    public PostMessageReactionsResponse withMessageReactionEntity(openapisdk.models.shared.MessageReactionEntity messageReactionEntity) {
        this.messageReactionEntity = messageReactionEntity;
        return this;
    }
    public Long statusCode;
    public PostMessageReactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}