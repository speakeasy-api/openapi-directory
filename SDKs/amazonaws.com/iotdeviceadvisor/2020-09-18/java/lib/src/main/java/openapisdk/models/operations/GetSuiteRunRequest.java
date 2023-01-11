package openapisdk.models.operations;



public class GetSuiteRunRequest {
    public GetSuiteRunPathParams pathParams;
    public GetSuiteRunRequest withPathParams(GetSuiteRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSuiteRunHeaders headers;
    public GetSuiteRunRequest withHeaders(GetSuiteRunHeaders headers) {
        this.headers = headers;
        return this;
    }
}