package openapisdk.models.operations;



public class StorageListFilesRequest {
    public StorageListFilesQueryParams queryParams;
    public StorageListFilesRequest withQueryParams(StorageListFilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageListFilesSecurity security;
    public StorageListFilesRequest withSecurity(StorageListFilesSecurity security) {
        this.security = security;
        return this;
    }
}