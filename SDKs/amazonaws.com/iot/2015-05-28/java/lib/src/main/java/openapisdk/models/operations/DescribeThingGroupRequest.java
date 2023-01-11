package openapisdk.models.operations;



public class DescribeThingGroupRequest {
    public DescribeThingGroupPathParams pathParams;
    public DescribeThingGroupRequest withPathParams(DescribeThingGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeThingGroupHeaders headers;
    public DescribeThingGroupRequest withHeaders(DescribeThingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
}