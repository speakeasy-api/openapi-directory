package openapisdk.models.operations;



public class StorageGetFilePreviewRequest {
    public StorageGetFilePreviewPathParams pathParams;
    public StorageGetFilePreviewRequest withPathParams(StorageGetFilePreviewPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageGetFilePreviewQueryParams queryParams;
    public StorageGetFilePreviewRequest withQueryParams(StorageGetFilePreviewQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageGetFilePreviewSecurity security;
    public StorageGetFilePreviewRequest withSecurity(StorageGetFilePreviewSecurity security) {
        this.security = security;
        return this;
    }
}