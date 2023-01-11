package openapisdk.models.operations;



public class GetSetAlarmStateRequest {
    public GetSetAlarmStateQueryParams queryParams;
    public GetSetAlarmStateRequest withQueryParams(GetSetAlarmStateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSetAlarmStateHeaders headers;
    public GetSetAlarmStateRequest withHeaders(GetSetAlarmStateHeaders headers) {
        this.headers = headers;
        return this;
    }
}