package openapisdk.models.operations;



public class GetV3ProductsRequest {
    public GetV3ProductsQueryParams queryParams;
    public GetV3ProductsRequest withQueryParams(GetV3ProductsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetV3ProductsHeaders headers;
    public GetV3ProductsRequest withHeaders(GetV3ProductsHeaders headers) {
        this.headers = headers;
        return this;
    }
}