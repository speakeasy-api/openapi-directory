package openapisdk.models.operations;



public class DescribeClassificationJobRequest {
    public DescribeClassificationJobPathParams pathParams;
    public DescribeClassificationJobRequest withPathParams(DescribeClassificationJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeClassificationJobHeaders headers;
    public DescribeClassificationJobRequest withHeaders(DescribeClassificationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
}