package openapisdk.models.operations;



public class GetSuiteDefinitionRequest {
    public GetSuiteDefinitionPathParams pathParams;
    public GetSuiteDefinitionRequest withPathParams(GetSuiteDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSuiteDefinitionQueryParams queryParams;
    public GetSuiteDefinitionRequest withQueryParams(GetSuiteDefinitionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSuiteDefinitionHeaders headers;
    public GetSuiteDefinitionRequest withHeaders(GetSuiteDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
}