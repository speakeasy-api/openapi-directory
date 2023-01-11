package openapisdk.models.operations;



public class GetMessageCommentReactionsIdResponse {
    public String contentType;
    public GetMessageCommentReactionsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageCommentReactionEntity messageCommentReactionEntity;
    public GetMessageCommentReactionsIdResponse withMessageCommentReactionEntity(openapisdk.models.shared.MessageCommentReactionEntity messageCommentReactionEntity) {
        this.messageCommentReactionEntity = messageCommentReactionEntity;
        return this;
    }
    public Long statusCode;
    public GetMessageCommentReactionsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}