package openapisdk.models.operations;



public class DescribeContactRequest {
    public DescribeContactPathParams pathParams;
    public DescribeContactRequest withPathParams(DescribeContactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeContactHeaders headers;
    public DescribeContactRequest withHeaders(DescribeContactHeaders headers) {
        this.headers = headers;
        return this;
    }
}