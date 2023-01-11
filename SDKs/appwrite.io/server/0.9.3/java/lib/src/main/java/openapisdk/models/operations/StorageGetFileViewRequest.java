package openapisdk.models.operations;



public class StorageGetFileViewRequest {
    public StorageGetFileViewPathParams pathParams;
    public StorageGetFileViewRequest withPathParams(StorageGetFileViewPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageGetFileViewSecurity security;
    public StorageGetFileViewRequest withSecurity(StorageGetFileViewSecurity security) {
        this.security = security;
        return this;
    }
}