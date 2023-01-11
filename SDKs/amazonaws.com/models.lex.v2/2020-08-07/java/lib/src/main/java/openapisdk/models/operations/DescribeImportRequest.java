package openapisdk.models.operations;



public class DescribeImportRequest {
    public DescribeImportPathParams pathParams;
    public DescribeImportRequest withPathParams(DescribeImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeImportHeaders headers;
    public DescribeImportRequest withHeaders(DescribeImportHeaders headers) {
        this.headers = headers;
        return this;
    }
}