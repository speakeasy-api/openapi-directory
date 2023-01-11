package openapisdk.models.operations;



public class GetUpdateGroupRequest {
    public GetUpdateGroupQueryParams queryParams;
    public GetUpdateGroupRequest withQueryParams(GetUpdateGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUpdateGroupHeaders headers;
    public GetUpdateGroupRequest withHeaders(GetUpdateGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
}