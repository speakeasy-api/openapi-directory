package openapisdk.models.operations;



public class PostMessageCommentsResponse {
    public String contentType;
    public PostMessageCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageCommentEntity messageCommentEntity;
    public PostMessageCommentsResponse withMessageCommentEntity(openapisdk.models.shared.MessageCommentEntity messageCommentEntity) {
        this.messageCommentEntity = messageCommentEntity;
        return this;
    }
    public Long statusCode;
    public PostMessageCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}