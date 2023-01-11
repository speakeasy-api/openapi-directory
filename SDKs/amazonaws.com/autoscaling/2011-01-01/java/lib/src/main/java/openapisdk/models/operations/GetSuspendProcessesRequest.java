package openapisdk.models.operations;



public class GetSuspendProcessesRequest {
    public GetSuspendProcessesQueryParams queryParams;
    public GetSuspendProcessesRequest withQueryParams(GetSuspendProcessesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSuspendProcessesHeaders headers;
    public GetSuspendProcessesRequest withHeaders(GetSuspendProcessesHeaders headers) {
        this.headers = headers;
        return this;
    }
}