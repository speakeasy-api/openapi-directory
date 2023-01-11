package openapisdk.models.operations;



public class PatchMessageCommentsIdResponse {
    public String contentType;
    public PatchMessageCommentsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageCommentEntity messageCommentEntity;
    public PatchMessageCommentsIdResponse withMessageCommentEntity(openapisdk.models.shared.MessageCommentEntity messageCommentEntity) {
        this.messageCommentEntity = messageCommentEntity;
        return this;
    }
    public Long statusCode;
    public PatchMessageCommentsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}