package openapisdk.models.operations;



public class GetRebuildEnvironmentRequest {
    public GetRebuildEnvironmentQueryParams queryParams;
    public GetRebuildEnvironmentRequest withQueryParams(GetRebuildEnvironmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRebuildEnvironmentHeaders headers;
    public GetRebuildEnvironmentRequest withHeaders(GetRebuildEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
}