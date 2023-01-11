package openapisdk.models.operations;



public class FolderListForPathResponse {
    public String contentType;
    public FolderListForPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileEntity[] fileEntities;
    public FolderListForPathResponse withFileEntities(openapisdk.models.shared.FileEntity[] fileEntities) {
        this.fileEntities = fileEntities;
        return this;
    }
    public Long statusCode;
    public FolderListForPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}