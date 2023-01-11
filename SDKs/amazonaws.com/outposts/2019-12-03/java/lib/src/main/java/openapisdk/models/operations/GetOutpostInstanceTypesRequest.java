package openapisdk.models.operations;



public class GetOutpostInstanceTypesRequest {
    public GetOutpostInstanceTypesPathParams pathParams;
    public GetOutpostInstanceTypesRequest withPathParams(GetOutpostInstanceTypesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOutpostInstanceTypesQueryParams queryParams;
    public GetOutpostInstanceTypesRequest withQueryParams(GetOutpostInstanceTypesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetOutpostInstanceTypesHeaders headers;
    public GetOutpostInstanceTypesRequest withHeaders(GetOutpostInstanceTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
}