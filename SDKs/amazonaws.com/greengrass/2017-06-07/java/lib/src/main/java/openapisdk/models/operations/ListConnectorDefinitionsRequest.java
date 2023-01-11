package openapisdk.models.operations;



public class ListConnectorDefinitionsRequest {
    public ListConnectorDefinitionsQueryParams queryParams;
    public ListConnectorDefinitionsRequest withQueryParams(ListConnectorDefinitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConnectorDefinitionsHeaders headers;
    public ListConnectorDefinitionsRequest withHeaders(ListConnectorDefinitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}