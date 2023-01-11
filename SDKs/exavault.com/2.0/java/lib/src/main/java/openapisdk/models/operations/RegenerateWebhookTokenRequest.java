package openapisdk.models.operations;



public class RegenerateWebhookTokenRequest {
    public RegenerateWebhookTokenPathParams pathParams;
    public RegenerateWebhookTokenRequest withPathParams(RegenerateWebhookTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RegenerateWebhookTokenHeaders headers;
    public RegenerateWebhookTokenRequest withHeaders(RegenerateWebhookTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
}