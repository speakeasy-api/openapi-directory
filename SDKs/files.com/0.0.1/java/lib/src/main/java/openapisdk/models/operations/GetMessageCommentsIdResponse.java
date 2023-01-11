package openapisdk.models.operations;



public class GetMessageCommentsIdResponse {
    public String contentType;
    public GetMessageCommentsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageCommentEntity messageCommentEntity;
    public GetMessageCommentsIdResponse withMessageCommentEntity(openapisdk.models.shared.MessageCommentEntity messageCommentEntity) {
        this.messageCommentEntity = messageCommentEntity;
        return this;
    }
    public Long statusCode;
    public GetMessageCommentsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}