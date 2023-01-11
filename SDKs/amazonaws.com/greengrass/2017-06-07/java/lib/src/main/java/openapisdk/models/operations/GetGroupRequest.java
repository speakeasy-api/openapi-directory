package openapisdk.models.operations;



public class GetGroupRequest {
    public GetGroupPathParams pathParams;
    public GetGroupRequest withPathParams(GetGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGroupHeaders headers;
    public GetGroupRequest withHeaders(GetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
}