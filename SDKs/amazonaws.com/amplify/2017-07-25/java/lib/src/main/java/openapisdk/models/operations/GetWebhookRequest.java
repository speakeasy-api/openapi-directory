package openapisdk.models.operations;



public class GetWebhookRequest {
    public GetWebhookPathParams pathParams;
    public GetWebhookRequest withPathParams(GetWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWebhookHeaders headers;
    public GetWebhookRequest withHeaders(GetWebhookHeaders headers) {
        this.headers = headers;
        return this;
    }
}