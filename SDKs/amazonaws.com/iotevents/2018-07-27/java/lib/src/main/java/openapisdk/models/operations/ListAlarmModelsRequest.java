package openapisdk.models.operations;



public class ListAlarmModelsRequest {
    public ListAlarmModelsQueryParams queryParams;
    public ListAlarmModelsRequest withQueryParams(ListAlarmModelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAlarmModelsHeaders headers;
    public ListAlarmModelsRequest withHeaders(ListAlarmModelsHeaders headers) {
        this.headers = headers;
        return this;
    }
}