package openapisdk.models.operations;



public class GetExperimentRequest {
    public GetExperimentPathParams pathParams;
    public GetExperimentRequest withPathParams(GetExperimentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetExperimentHeaders headers;
    public GetExperimentRequest withHeaders(GetExperimentHeaders headers) {
        this.headers = headers;
        return this;
    }
}