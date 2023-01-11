package openapisdk.models.operations;



public class DescribeVaultRequest {
    public DescribeVaultPathParams pathParams;
    public DescribeVaultRequest withPathParams(DescribeVaultPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeVaultHeaders headers;
    public DescribeVaultRequest withHeaders(DescribeVaultHeaders headers) {
        this.headers = headers;
        return this;
    }
}