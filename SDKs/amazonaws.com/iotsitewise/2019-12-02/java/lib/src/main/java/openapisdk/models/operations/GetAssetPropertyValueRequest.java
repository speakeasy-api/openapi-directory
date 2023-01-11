package openapisdk.models.operations;



public class GetAssetPropertyValueRequest {
    public GetAssetPropertyValueQueryParams queryParams;
    public GetAssetPropertyValueRequest withQueryParams(GetAssetPropertyValueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAssetPropertyValueHeaders headers;
    public GetAssetPropertyValueRequest withHeaders(GetAssetPropertyValueHeaders headers) {
        this.headers = headers;
        return this;
    }
}