package openapisdk.models.operations;



public class GetMessageCommentsResponse {
    public String contentType;
    public GetMessageCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageCommentEntity[] messageCommentEntities;
    public GetMessageCommentsResponse withMessageCommentEntities(openapisdk.models.shared.MessageCommentEntity[] messageCommentEntities) {
        this.messageCommentEntities = messageCommentEntities;
        return this;
    }
    public Long statusCode;
    public GetMessageCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}