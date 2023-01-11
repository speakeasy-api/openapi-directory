package openapisdk.models.operations;



public class DescribeSlotRequest {
    public DescribeSlotPathParams pathParams;
    public DescribeSlotRequest withPathParams(DescribeSlotPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeSlotHeaders headers;
    public DescribeSlotRequest withHeaders(DescribeSlotHeaders headers) {
        this.headers = headers;
        return this;
    }
}