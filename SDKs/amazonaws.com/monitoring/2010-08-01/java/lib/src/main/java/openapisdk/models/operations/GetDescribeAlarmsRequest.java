package openapisdk.models.operations;



public class GetDescribeAlarmsRequest {
    public GetDescribeAlarmsQueryParams queryParams;
    public GetDescribeAlarmsRequest withQueryParams(GetDescribeAlarmsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeAlarmsHeaders headers;
    public GetDescribeAlarmsRequest withHeaders(GetDescribeAlarmsHeaders headers) {
        this.headers = headers;
        return this;
    }
}