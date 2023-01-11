package openapisdk.models.operations;



public class StorageDeleteFileRequest {
    public StorageDeleteFilePathParams pathParams;
    public StorageDeleteFileRequest withPathParams(StorageDeleteFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageDeleteFileSecurity security;
    public StorageDeleteFileRequest withSecurity(StorageDeleteFileSecurity security) {
        this.security = security;
        return this;
    }
}