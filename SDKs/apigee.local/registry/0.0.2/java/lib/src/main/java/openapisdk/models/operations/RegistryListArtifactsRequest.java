package openapisdk.models.operations;



public class RegistryListArtifactsRequest {
    public RegistryListArtifactsPathParams pathParams;
    public RegistryListArtifactsRequest withPathParams(RegistryListArtifactsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RegistryListArtifactsQueryParams queryParams;
    public RegistryListArtifactsRequest withQueryParams(RegistryListArtifactsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}