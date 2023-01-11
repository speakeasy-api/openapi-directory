package openapisdk.models.operations;



public class GetDistrictRequest {
    public GetDistrictPathParams pathParams;
    public GetDistrictRequest withPathParams(GetDistrictPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDistrictQueryParams queryParams;
    public GetDistrictRequest withQueryParams(GetDistrictQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}