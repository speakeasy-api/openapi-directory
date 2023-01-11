package openapisdk.models.operations;



public class DescribeAnomalyRequest {
    public DescribeAnomalyPathParams pathParams;
    public DescribeAnomalyRequest withPathParams(DescribeAnomalyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeAnomalyHeaders headers;
    public DescribeAnomalyRequest withHeaders(DescribeAnomalyHeaders headers) {
        this.headers = headers;
        return this;
    }
}