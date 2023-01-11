package openapisdk.models.operations;



public class StorageGetFileRequest {
    public StorageGetFilePathParams pathParams;
    public StorageGetFileRequest withPathParams(StorageGetFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageGetFileSecurity security;
    public StorageGetFileRequest withSecurity(StorageGetFileSecurity security) {
        this.security = security;
        return this;
    }
}