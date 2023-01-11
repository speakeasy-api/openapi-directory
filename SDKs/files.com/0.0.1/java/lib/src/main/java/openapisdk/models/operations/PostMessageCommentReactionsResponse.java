package openapisdk.models.operations;



public class PostMessageCommentReactionsResponse {
    public String contentType;
    public PostMessageCommentReactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageCommentReactionEntity messageCommentReactionEntity;
    public PostMessageCommentReactionsResponse withMessageCommentReactionEntity(openapisdk.models.shared.MessageCommentReactionEntity messageCommentReactionEntity) {
        this.messageCommentReactionEntity = messageCommentReactionEntity;
        return this;
    }
    public Long statusCode;
    public PostMessageCommentReactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}