package openapisdk.models.operations;



public class StopSuiteRunRequest {
    public StopSuiteRunPathParams pathParams;
    public StopSuiteRunRequest withPathParams(StopSuiteRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StopSuiteRunHeaders headers;
    public StopSuiteRunRequest withHeaders(StopSuiteRunHeaders headers) {
        this.headers = headers;
        return this;
    }
}