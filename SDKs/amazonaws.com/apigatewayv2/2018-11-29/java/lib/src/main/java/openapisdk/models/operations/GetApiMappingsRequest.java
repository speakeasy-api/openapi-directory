package openapisdk.models.operations;



public class GetApiMappingsRequest {
    public GetApiMappingsPathParams pathParams;
    public GetApiMappingsRequest withPathParams(GetApiMappingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetApiMappingsQueryParams queryParams;
    public GetApiMappingsRequest withQueryParams(GetApiMappingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApiMappingsHeaders headers;
    public GetApiMappingsRequest withHeaders(GetApiMappingsHeaders headers) {
        this.headers = headers;
        return this;
    }
}