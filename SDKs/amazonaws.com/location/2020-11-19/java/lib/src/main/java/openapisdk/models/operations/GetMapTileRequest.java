package openapisdk.models.operations;



public class GetMapTileRequest {
    public GetMapTilePathParams pathParams;
    public GetMapTileRequest withPathParams(GetMapTilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetMapTileHeaders headers;
    public GetMapTileRequest withHeaders(GetMapTileHeaders headers) {
        this.headers = headers;
        return this;
    }
}