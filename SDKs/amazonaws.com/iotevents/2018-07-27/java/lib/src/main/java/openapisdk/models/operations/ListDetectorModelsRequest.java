package openapisdk.models.operations;



public class ListDetectorModelsRequest {
    public ListDetectorModelsQueryParams queryParams;
    public ListDetectorModelsRequest withQueryParams(ListDetectorModelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDetectorModelsHeaders headers;
    public ListDetectorModelsRequest withHeaders(ListDetectorModelsHeaders headers) {
        this.headers = headers;
        return this;
    }
}