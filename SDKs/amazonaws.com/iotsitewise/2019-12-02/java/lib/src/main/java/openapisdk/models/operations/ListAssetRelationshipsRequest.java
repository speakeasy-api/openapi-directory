package openapisdk.models.operations;



public class ListAssetRelationshipsRequest {
    public ListAssetRelationshipsPathParams pathParams;
    public ListAssetRelationshipsRequest withPathParams(ListAssetRelationshipsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAssetRelationshipsQueryParams queryParams;
    public ListAssetRelationshipsRequest withQueryParams(ListAssetRelationshipsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssetRelationshipsHeaders headers;
    public ListAssetRelationshipsRequest withHeaders(ListAssetRelationshipsHeaders headers) {
        this.headers = headers;
        return this;
    }
}