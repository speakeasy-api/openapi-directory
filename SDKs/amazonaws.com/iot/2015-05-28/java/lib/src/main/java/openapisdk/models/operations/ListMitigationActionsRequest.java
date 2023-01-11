package openapisdk.models.operations;



public class ListMitigationActionsRequest {
    public ListMitigationActionsQueryParams queryParams;
    public ListMitigationActionsRequest withQueryParams(ListMitigationActionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMitigationActionsHeaders headers;
    public ListMitigationActionsRequest withHeaders(ListMitigationActionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}