package openapisdk.models.operations;



public class PostV3BoardsBoardIdCommentsResponse {
    public openapisdk.models.shared.CommentCreated commentCreated;
    public PostV3BoardsBoardIdCommentsResponse withCommentCreated(openapisdk.models.shared.CommentCreated commentCreated) {
        this.commentCreated = commentCreated;
        return this;
    }
    public String contentType;
    public PostV3BoardsBoardIdCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostV3BoardsBoardIdCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}