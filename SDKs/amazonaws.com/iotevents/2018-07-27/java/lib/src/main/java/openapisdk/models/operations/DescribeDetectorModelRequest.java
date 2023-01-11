package openapisdk.models.operations;



public class DescribeDetectorModelRequest {
    public DescribeDetectorModelPathParams pathParams;
    public DescribeDetectorModelRequest withPathParams(DescribeDetectorModelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeDetectorModelQueryParams queryParams;
    public DescribeDetectorModelRequest withQueryParams(DescribeDetectorModelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeDetectorModelHeaders headers;
    public DescribeDetectorModelRequest withHeaders(DescribeDetectorModelHeaders headers) {
        this.headers = headers;
        return this;
    }
}