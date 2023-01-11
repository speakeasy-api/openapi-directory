package openapisdk.models.operations;



public class GetApiMappingRequest {
    public GetApiMappingPathParams pathParams;
    public GetApiMappingRequest withPathParams(GetApiMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetApiMappingHeaders headers;
    public GetApiMappingRequest withHeaders(GetApiMappingHeaders headers) {
        this.headers = headers;
        return this;
    }
}