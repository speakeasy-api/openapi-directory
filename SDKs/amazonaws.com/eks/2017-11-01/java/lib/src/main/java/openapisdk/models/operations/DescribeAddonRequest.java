package openapisdk.models.operations;



public class DescribeAddonRequest {
    public DescribeAddonPathParams pathParams;
    public DescribeAddonRequest withPathParams(DescribeAddonPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeAddonHeaders headers;
    public DescribeAddonRequest withHeaders(DescribeAddonHeaders headers) {
        this.headers = headers;
        return this;
    }
}