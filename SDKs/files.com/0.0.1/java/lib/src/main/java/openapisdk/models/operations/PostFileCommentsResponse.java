package openapisdk.models.operations;



public class PostFileCommentsResponse {
    public String contentType;
    public PostFileCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileCommentEntity fileCommentEntity;
    public PostFileCommentsResponse withFileCommentEntity(openapisdk.models.shared.FileCommentEntity fileCommentEntity) {
        this.fileCommentEntity = fileCommentEntity;
        return this;
    }
    public Long statusCode;
    public PostFileCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}