package openapisdk.models.operations;



public class FileActionCopyResponse {
    public String contentType;
    public FileActionCopyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileActionEntity fileActionEntity;
    public FileActionCopyResponse withFileActionEntity(openapisdk.models.shared.FileActionEntity fileActionEntity) {
        this.fileActionEntity = fileActionEntity;
        return this;
    }
    public Long statusCode;
    public FileActionCopyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}