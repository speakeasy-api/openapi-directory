package openapisdk.models.operations;



public class DescribeThingRequest {
    public DescribeThingPathParams pathParams;
    public DescribeThingRequest withPathParams(DescribeThingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeThingHeaders headers;
    public DescribeThingRequest withHeaders(DescribeThingHeaders headers) {
        this.headers = headers;
        return this;
    }
}