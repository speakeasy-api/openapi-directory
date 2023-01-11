package openapisdk.models.operations;



public class GetMessageReactionsResponse {
    public String contentType;
    public GetMessageReactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageReactionEntity[] messageReactionEntities;
    public GetMessageReactionsResponse withMessageReactionEntities(openapisdk.models.shared.MessageReactionEntity[] messageReactionEntities) {
        this.messageReactionEntities = messageReactionEntities;
        return this;
    }
    public Long statusCode;
    public GetMessageReactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}