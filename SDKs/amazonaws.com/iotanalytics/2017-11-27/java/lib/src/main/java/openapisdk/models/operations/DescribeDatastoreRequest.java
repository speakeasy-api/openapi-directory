package openapisdk.models.operations;



public class DescribeDatastoreRequest {
    public DescribeDatastorePathParams pathParams;
    public DescribeDatastoreRequest withPathParams(DescribeDatastorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeDatastoreQueryParams queryParams;
    public DescribeDatastoreRequest withQueryParams(DescribeDatastoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeDatastoreHeaders headers;
    public DescribeDatastoreRequest withHeaders(DescribeDatastoreHeaders headers) {
        this.headers = headers;
        return this;
    }
}