package openapisdk.models.operations;



public class DescribeNodegroupRequest {
    public DescribeNodegroupPathParams pathParams;
    public DescribeNodegroupRequest withPathParams(DescribeNodegroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeNodegroupHeaders headers;
    public DescribeNodegroupRequest withHeaders(DescribeNodegroupHeaders headers) {
        this.headers = headers;
        return this;
    }
}