package openapisdk.models.operations;



public class PostFilesPathResponse {
    public String contentType;
    public PostFilesPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileEntity fileEntity;
    public PostFilesPathResponse withFileEntity(openapisdk.models.shared.FileEntity fileEntity) {
        this.fileEntity = fileEntity;
        return this;
    }
    public Long statusCode;
    public PostFilesPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}