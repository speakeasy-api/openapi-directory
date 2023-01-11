package openapisdk.models.operations;



public class ListMeshesRequest {
    public ListMeshesQueryParams queryParams;
    public ListMeshesRequest withQueryParams(ListMeshesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMeshesHeaders headers;
    public ListMeshesRequest withHeaders(ListMeshesHeaders headers) {
        this.headers = headers;
        return this;
    }
}