package openapisdk.models.operations;



public class DeleteWebhookRequest {
    public DeleteWebhookPathParams pathParams;
    public DeleteWebhookRequest withPathParams(DeleteWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteWebhookQueryParams queryParams;
    public DeleteWebhookRequest withQueryParams(DeleteWebhookQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}