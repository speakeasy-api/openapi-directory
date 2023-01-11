package openapisdk.models.operations;



public class GetStudioRequest {
    public GetStudioPathParams pathParams;
    public GetStudioRequest withPathParams(GetStudioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetStudioHeaders headers;
    public GetStudioRequest withHeaders(GetStudioHeaders headers) {
        this.headers = headers;
        return this;
    }
}