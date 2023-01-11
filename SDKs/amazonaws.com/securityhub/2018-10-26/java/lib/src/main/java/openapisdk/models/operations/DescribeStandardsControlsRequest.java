package openapisdk.models.operations;



public class DescribeStandardsControlsRequest {
    public DescribeStandardsControlsPathParams pathParams;
    public DescribeStandardsControlsRequest withPathParams(DescribeStandardsControlsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeStandardsControlsQueryParams queryParams;
    public DescribeStandardsControlsRequest withQueryParams(DescribeStandardsControlsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeStandardsControlsHeaders headers;
    public DescribeStandardsControlsRequest withHeaders(DescribeStandardsControlsHeaders headers) {
        this.headers = headers;
        return this;
    }
}