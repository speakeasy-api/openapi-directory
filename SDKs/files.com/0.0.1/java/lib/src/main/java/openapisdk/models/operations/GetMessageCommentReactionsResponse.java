package openapisdk.models.operations;



public class GetMessageCommentReactionsResponse {
    public String contentType;
    public GetMessageCommentReactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageCommentReactionEntity[] messageCommentReactionEntities;
    public GetMessageCommentReactionsResponse withMessageCommentReactionEntities(openapisdk.models.shared.MessageCommentReactionEntity[] messageCommentReactionEntities) {
        this.messageCommentReactionEntities = messageCommentReactionEntities;
        return this;
    }
    public Long statusCode;
    public GetMessageCommentReactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}