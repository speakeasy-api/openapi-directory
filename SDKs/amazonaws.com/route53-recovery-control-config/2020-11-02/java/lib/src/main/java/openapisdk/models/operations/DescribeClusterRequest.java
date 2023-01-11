package openapisdk.models.operations;



public class DescribeClusterRequest {
    public DescribeClusterPathParams pathParams;
    public DescribeClusterRequest withPathParams(DescribeClusterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeClusterHeaders headers;
    public DescribeClusterRequest withHeaders(DescribeClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
}