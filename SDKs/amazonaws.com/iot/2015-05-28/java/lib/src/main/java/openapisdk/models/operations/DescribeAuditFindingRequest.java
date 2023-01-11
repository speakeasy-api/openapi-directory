package openapisdk.models.operations;



public class DescribeAuditFindingRequest {
    public DescribeAuditFindingPathParams pathParams;
    public DescribeAuditFindingRequest withPathParams(DescribeAuditFindingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeAuditFindingHeaders headers;
    public DescribeAuditFindingRequest withHeaders(DescribeAuditFindingHeaders headers) {
        this.headers = headers;
        return this;
    }
}