package openapisdk.models.operations;



public class DescribeAlarmRequest {
    public DescribeAlarmPathParams pathParams;
    public DescribeAlarmRequest withPathParams(DescribeAlarmPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeAlarmQueryParams queryParams;
    public DescribeAlarmRequest withQueryParams(DescribeAlarmQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeAlarmHeaders headers;
    public DescribeAlarmRequest withHeaders(DescribeAlarmHeaders headers) {
        this.headers = headers;
        return this;
    }
}