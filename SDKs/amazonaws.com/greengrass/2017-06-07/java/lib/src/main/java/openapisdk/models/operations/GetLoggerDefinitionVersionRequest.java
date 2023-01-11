package openapisdk.models.operations;



public class GetLoggerDefinitionVersionRequest {
    public GetLoggerDefinitionVersionPathParams pathParams;
    public GetLoggerDefinitionVersionRequest withPathParams(GetLoggerDefinitionVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLoggerDefinitionVersionQueryParams queryParams;
    public GetLoggerDefinitionVersionRequest withQueryParams(GetLoggerDefinitionVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetLoggerDefinitionVersionHeaders headers;
    public GetLoggerDefinitionVersionRequest withHeaders(GetLoggerDefinitionVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
}