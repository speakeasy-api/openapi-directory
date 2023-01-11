package openapisdk.models.operations;



public class GetConnectorRequest {
    public GetConnectorPathParams pathParams;
    public GetConnectorRequest withPathParams(GetConnectorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetConnectorQueryParams queryParams;
    public GetConnectorRequest withQueryParams(GetConnectorQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}