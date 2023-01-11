package openapisdk.models.operations;



public class GetActionRequest {
    public GetActionPathParams pathParams;
    public GetActionRequest withPathParams(GetActionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetActionHeaders headers;
    public GetActionRequest withHeaders(GetActionHeaders headers) {
        this.headers = headers;
        return this;
    }
}