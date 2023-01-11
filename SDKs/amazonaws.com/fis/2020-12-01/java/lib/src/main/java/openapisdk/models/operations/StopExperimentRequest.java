package openapisdk.models.operations;



public class StopExperimentRequest {
    public StopExperimentPathParams pathParams;
    public StopExperimentRequest withPathParams(StopExperimentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StopExperimentHeaders headers;
    public StopExperimentRequest withHeaders(StopExperimentHeaders headers) {
        this.headers = headers;
        return this;
    }
}