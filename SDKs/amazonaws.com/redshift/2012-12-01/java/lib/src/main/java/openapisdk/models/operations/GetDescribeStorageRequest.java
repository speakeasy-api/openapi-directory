package openapisdk.models.operations;



public class GetDescribeStorageRequest {
    public GetDescribeStorageQueryParams queryParams;
    public GetDescribeStorageRequest withQueryParams(GetDescribeStorageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeStorageHeaders headers;
    public GetDescribeStorageRequest withHeaders(GetDescribeStorageHeaders headers) {
        this.headers = headers;
        return this;
    }
}