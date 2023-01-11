package openapisdk.models.operations;



public class StorageGetFileDownloadRequest {
    public StorageGetFileDownloadPathParams pathParams;
    public StorageGetFileDownloadRequest withPathParams(StorageGetFileDownloadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageGetFileDownloadSecurity security;
    public StorageGetFileDownloadRequest withSecurity(StorageGetFileDownloadSecurity security) {
        this.security = security;
        return this;
    }
}