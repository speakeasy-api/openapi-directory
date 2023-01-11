package openapisdk.models.operations;



public class PatchFilesPathResponse {
    public String contentType;
    public PatchFilesPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileEntity fileEntity;
    public PatchFilesPathResponse withFileEntity(openapisdk.models.shared.FileEntity fileEntity) {
        this.fileEntity = fileEntity;
        return this;
    }
    public Long statusCode;
    public PatchFilesPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}