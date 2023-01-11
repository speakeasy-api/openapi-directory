package openapisdk.models.operations;



public class RegistryListApiVersionsRequest {
    public RegistryListApiVersionsPathParams pathParams;
    public RegistryListApiVersionsRequest withPathParams(RegistryListApiVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RegistryListApiVersionsQueryParams queryParams;
    public RegistryListApiVersionsRequest withQueryParams(RegistryListApiVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}