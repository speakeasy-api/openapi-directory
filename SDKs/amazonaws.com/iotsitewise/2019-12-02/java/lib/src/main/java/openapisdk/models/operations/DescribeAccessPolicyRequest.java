package openapisdk.models.operations;



public class DescribeAccessPolicyRequest {
    public DescribeAccessPolicyPathParams pathParams;
    public DescribeAccessPolicyRequest withPathParams(DescribeAccessPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeAccessPolicyHeaders headers;
    public DescribeAccessPolicyRequest withHeaders(DescribeAccessPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}