package openapisdk.models.operations;



public class GetResponsePlanRequest {
    public GetResponsePlanQueryParams queryParams;
    public GetResponsePlanRequest withQueryParams(GetResponsePlanQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetResponsePlanHeaders headers;
    public GetResponsePlanRequest withHeaders(GetResponsePlanHeaders headers) {
        this.headers = headers;
        return this;
    }
}