package openapisdk.models.operations;



public class GetV3PurchasedAssetsRequest {
    public GetV3PurchasedAssetsQueryParams queryParams;
    public GetV3PurchasedAssetsRequest withQueryParams(GetV3PurchasedAssetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetV3PurchasedAssetsHeaders headers;
    public GetV3PurchasedAssetsRequest withHeaders(GetV3PurchasedAssetsHeaders headers) {
        this.headers = headers;
        return this;
    }
}