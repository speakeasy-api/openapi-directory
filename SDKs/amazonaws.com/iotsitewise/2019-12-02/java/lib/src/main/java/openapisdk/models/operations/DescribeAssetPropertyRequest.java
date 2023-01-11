package openapisdk.models.operations;



public class DescribeAssetPropertyRequest {
    public DescribeAssetPropertyPathParams pathParams;
    public DescribeAssetPropertyRequest withPathParams(DescribeAssetPropertyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeAssetPropertyHeaders headers;
    public DescribeAssetPropertyRequest withHeaders(DescribeAssetPropertyHeaders headers) {
        this.headers = headers;
        return this;
    }
}