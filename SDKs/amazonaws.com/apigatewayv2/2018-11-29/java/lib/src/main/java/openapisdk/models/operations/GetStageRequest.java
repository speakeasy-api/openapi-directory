package openapisdk.models.operations;



public class GetStageRequest {
    public GetStagePathParams pathParams;
    public GetStageRequest withPathParams(GetStagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetStageHeaders headers;
    public GetStageRequest withHeaders(GetStageHeaders headers) {
        this.headers = headers;
        return this;
    }
}