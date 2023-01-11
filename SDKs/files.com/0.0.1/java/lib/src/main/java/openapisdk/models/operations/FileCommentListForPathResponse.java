package openapisdk.models.operations;



public class FileCommentListForPathResponse {
    public String contentType;
    public FileCommentListForPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileCommentEntity[] fileCommentEntities;
    public FileCommentListForPathResponse withFileCommentEntities(openapisdk.models.shared.FileCommentEntity[] fileCommentEntities) {
        this.fileCommentEntities = fileCommentEntities;
        return this;
    }
    public Long statusCode;
    public FileCommentListForPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}