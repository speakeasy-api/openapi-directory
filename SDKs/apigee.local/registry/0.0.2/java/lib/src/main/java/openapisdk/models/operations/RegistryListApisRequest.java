package openapisdk.models.operations;



public class RegistryListApisRequest {
    public RegistryListApisPathParams pathParams;
    public RegistryListApisRequest withPathParams(RegistryListApisPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RegistryListApisQueryParams queryParams;
    public RegistryListApisRequest withQueryParams(RegistryListApisQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}