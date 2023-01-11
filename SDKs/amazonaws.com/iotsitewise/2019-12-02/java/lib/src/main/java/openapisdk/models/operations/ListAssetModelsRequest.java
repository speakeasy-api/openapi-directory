package openapisdk.models.operations;



public class ListAssetModelsRequest {
    public ListAssetModelsQueryParams queryParams;
    public ListAssetModelsRequest withQueryParams(ListAssetModelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssetModelsHeaders headers;
    public ListAssetModelsRequest withHeaders(ListAssetModelsHeaders headers) {
        this.headers = headers;
        return this;
    }
}