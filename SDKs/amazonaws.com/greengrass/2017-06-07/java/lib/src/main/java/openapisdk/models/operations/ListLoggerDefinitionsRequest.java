package openapisdk.models.operations;



public class ListLoggerDefinitionsRequest {
    public ListLoggerDefinitionsQueryParams queryParams;
    public ListLoggerDefinitionsRequest withQueryParams(ListLoggerDefinitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLoggerDefinitionsHeaders headers;
    public ListLoggerDefinitionsRequest withHeaders(ListLoggerDefinitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}