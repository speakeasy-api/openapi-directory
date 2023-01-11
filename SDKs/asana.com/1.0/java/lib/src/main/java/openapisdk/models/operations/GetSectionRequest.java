package openapisdk.models.operations;



public class GetSectionRequest {
    public GetSectionPathParams pathParams;
    public GetSectionRequest withPathParams(GetSectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSectionQueryParams queryParams;
    public GetSectionRequest withQueryParams(GetSectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}