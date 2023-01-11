package openapisdk.models.operations;



public class FileActionMoveResponse {
    public String contentType;
    public FileActionMoveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileActionEntity fileActionEntity;
    public FileActionMoveResponse withFileActionEntity(openapisdk.models.shared.FileActionEntity fileActionEntity) {
        this.fileActionEntity = fileActionEntity;
        return this;
    }
    public Long statusCode;
    public FileActionMoveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}