package openapisdk.models.operations;



public class StorageListFilesResponse {
    public String contentType;
    public StorageListFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageListFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FileList fileList;
    public StorageListFilesResponse withFileList(openapisdk.models.shared.FileList fileList) {
        this.fileList = fileList;
        return this;
    }
}