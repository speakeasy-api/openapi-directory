package openapisdk.models.operations;



public class ListControlPanelsRequest {
    public ListControlPanelsQueryParams queryParams;
    public ListControlPanelsRequest withQueryParams(ListControlPanelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListControlPanelsHeaders headers;
    public ListControlPanelsRequest withHeaders(ListControlPanelsHeaders headers) {
        this.headers = headers;
        return this;
    }
}