package openapisdk.models.operations;



public class DescribeAuditTaskRequest {
    public DescribeAuditTaskPathParams pathParams;
    public DescribeAuditTaskRequest withPathParams(DescribeAuditTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeAuditTaskHeaders headers;
    public DescribeAuditTaskRequest withHeaders(DescribeAuditTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
}