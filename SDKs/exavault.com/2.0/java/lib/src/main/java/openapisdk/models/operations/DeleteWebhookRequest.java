package openapisdk.models.operations;



public class DeleteWebhookRequest {
    public DeleteWebhookPathParams pathParams;
    public DeleteWebhookRequest withPathParams(DeleteWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteWebhookHeaders headers;
    public DeleteWebhookRequest withHeaders(DeleteWebhookHeaders headers) {
        this.headers = headers;
        return this;
    }
}