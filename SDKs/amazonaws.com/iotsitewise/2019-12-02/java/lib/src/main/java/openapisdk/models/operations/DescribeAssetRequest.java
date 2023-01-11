package openapisdk.models.operations;



public class DescribeAssetRequest {
    public DescribeAssetPathParams pathParams;
    public DescribeAssetRequest withPathParams(DescribeAssetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeAssetHeaders headers;
    public DescribeAssetRequest withHeaders(DescribeAssetHeaders headers) {
        this.headers = headers;
        return this;
    }
}