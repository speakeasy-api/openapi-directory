package openapisdk.models.operations;



public class GetDescribeAlarmHistoryRequest {
    public GetDescribeAlarmHistoryQueryParams queryParams;
    public GetDescribeAlarmHistoryRequest withQueryParams(GetDescribeAlarmHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeAlarmHistoryHeaders headers;
    public GetDescribeAlarmHistoryRequest withHeaders(GetDescribeAlarmHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
}