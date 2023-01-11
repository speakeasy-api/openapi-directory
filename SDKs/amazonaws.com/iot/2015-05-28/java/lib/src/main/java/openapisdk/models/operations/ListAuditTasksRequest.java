package openapisdk.models.operations;



public class ListAuditTasksRequest {
    public ListAuditTasksQueryParams queryParams;
    public ListAuditTasksRequest withQueryParams(ListAuditTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAuditTasksHeaders headers;
    public ListAuditTasksRequest withHeaders(ListAuditTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
}