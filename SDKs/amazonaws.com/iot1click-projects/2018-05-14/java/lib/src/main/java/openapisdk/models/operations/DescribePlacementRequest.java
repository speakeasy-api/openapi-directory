package openapisdk.models.operations;



public class DescribePlacementRequest {
    public DescribePlacementPathParams pathParams;
    public DescribePlacementRequest withPathParams(DescribePlacementPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribePlacementHeaders headers;
    public DescribePlacementRequest withHeaders(DescribePlacementHeaders headers) {
        this.headers = headers;
        return this;
    }
}