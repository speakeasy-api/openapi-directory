package openapisdk.models.operations;



public class ListWebhooksRequest {
    public ListWebhooksPathParams pathParams;
    public ListWebhooksRequest withPathParams(ListWebhooksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListWebhooksQueryParams queryParams;
    public ListWebhooksRequest withQueryParams(ListWebhooksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWebhooksHeaders headers;
    public ListWebhooksRequest withHeaders(ListWebhooksHeaders headers) {
        this.headers = headers;
        return this;
    }
}