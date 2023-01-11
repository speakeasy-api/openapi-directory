package openapisdk.models.operations;



public class GetDetachInstancesRequest {
    public GetDetachInstancesQueryParams queryParams;
    public GetDetachInstancesRequest withQueryParams(GetDetachInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDetachInstancesHeaders headers;
    public GetDetachInstancesRequest withHeaders(GetDetachInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
}