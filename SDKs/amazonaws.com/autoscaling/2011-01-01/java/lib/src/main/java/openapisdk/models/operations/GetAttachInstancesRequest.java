package openapisdk.models.operations;



public class GetAttachInstancesRequest {
    public GetAttachInstancesQueryParams queryParams;
    public GetAttachInstancesRequest withQueryParams(GetAttachInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAttachInstancesHeaders headers;
    public GetAttachInstancesRequest withHeaders(GetAttachInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
}