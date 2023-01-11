package openapisdk.models.operations;



public class DescribeExportRequest {
    public DescribeExportPathParams pathParams;
    public DescribeExportRequest withPathParams(DescribeExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeExportHeaders headers;
    public DescribeExportRequest withHeaders(DescribeExportHeaders headers) {
        this.headers = headers;
        return this;
    }
}