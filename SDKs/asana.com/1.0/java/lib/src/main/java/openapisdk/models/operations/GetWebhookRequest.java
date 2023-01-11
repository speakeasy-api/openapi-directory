package openapisdk.models.operations;



public class GetWebhookRequest {
    public GetWebhookPathParams pathParams;
    public GetWebhookRequest withPathParams(GetWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWebhookQueryParams queryParams;
    public GetWebhookRequest withQueryParams(GetWebhookQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}