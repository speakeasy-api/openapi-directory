package openapisdk.models.operations;



public class GetV3BoardsBoardIdCommentsResponse {
    public openapisdk.models.shared.CommentsList commentsList;
    public GetV3BoardsBoardIdCommentsResponse withCommentsList(openapisdk.models.shared.CommentsList commentsList) {
        this.commentsList = commentsList;
        return this;
    }
    public String contentType;
    public GetV3BoardsBoardIdCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV3BoardsBoardIdCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}