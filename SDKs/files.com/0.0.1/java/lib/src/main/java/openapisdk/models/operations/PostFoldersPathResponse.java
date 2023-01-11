package openapisdk.models.operations;



public class PostFoldersPathResponse {
    public String contentType;
    public PostFoldersPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileEntity fileEntity;
    public PostFoldersPathResponse withFileEntity(openapisdk.models.shared.FileEntity fileEntity) {
        this.fileEntity = fileEntity;
        return this;
    }
    public Long statusCode;
    public PostFoldersPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}