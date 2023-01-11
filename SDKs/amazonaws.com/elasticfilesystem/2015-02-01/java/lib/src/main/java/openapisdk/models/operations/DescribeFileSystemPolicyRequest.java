package openapisdk.models.operations;



public class DescribeFileSystemPolicyRequest {
    public DescribeFileSystemPolicyPathParams pathParams;
    public DescribeFileSystemPolicyRequest withPathParams(DescribeFileSystemPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeFileSystemPolicyHeaders headers;
    public DescribeFileSystemPolicyRequest withHeaders(DescribeFileSystemPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}