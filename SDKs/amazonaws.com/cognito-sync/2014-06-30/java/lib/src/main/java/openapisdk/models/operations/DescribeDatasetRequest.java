package openapisdk.models.operations;



public class DescribeDatasetRequest {
    public DescribeDatasetPathParams pathParams;
    public DescribeDatasetRequest withPathParams(DescribeDatasetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeDatasetHeaders headers;
    public DescribeDatasetRequest withHeaders(DescribeDatasetHeaders headers) {
        this.headers = headers;
        return this;
    }
}