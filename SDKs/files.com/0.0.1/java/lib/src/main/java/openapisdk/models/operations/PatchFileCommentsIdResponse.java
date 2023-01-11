package openapisdk.models.operations;



public class PatchFileCommentsIdResponse {
    public String contentType;
    public PatchFileCommentsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileCommentEntity fileCommentEntity;
    public PatchFileCommentsIdResponse withFileCommentEntity(openapisdk.models.shared.FileCommentEntity fileCommentEntity) {
        this.fileCommentEntity = fileCommentEntity;
        return this;
    }
    public Long statusCode;
    public PatchFileCommentsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}