package openapisdk.models.operations;



public class DescribeSecurityProfileRequest {
    public DescribeSecurityProfilePathParams pathParams;
    public DescribeSecurityProfileRequest withPathParams(DescribeSecurityProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeSecurityProfileHeaders headers;
    public DescribeSecurityProfileRequest withHeaders(DescribeSecurityProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
}