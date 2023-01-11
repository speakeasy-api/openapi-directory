package openapisdk.models.operations;



public class FileActionMetadataResponse {
    public String contentType;
    public FileActionMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileEntity fileEntity;
    public FileActionMetadataResponse withFileEntity(openapisdk.models.shared.FileEntity fileEntity) {
        this.fileEntity = fileEntity;
        return this;
    }
    public Long statusCode;
    public FileActionMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}