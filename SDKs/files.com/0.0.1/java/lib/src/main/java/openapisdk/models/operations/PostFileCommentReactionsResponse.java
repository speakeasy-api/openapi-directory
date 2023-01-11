package openapisdk.models.operations;



public class PostFileCommentReactionsResponse {
    public String contentType;
    public PostFileCommentReactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileCommentReactionEntity fileCommentReactionEntity;
    public PostFileCommentReactionsResponse withFileCommentReactionEntity(openapisdk.models.shared.FileCommentReactionEntity fileCommentReactionEntity) {
        this.fileCommentReactionEntity = fileCommentReactionEntity;
        return this;
    }
    public Long statusCode;
    public PostFileCommentReactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}