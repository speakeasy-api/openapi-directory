package openapisdk.models.operations;



public class GetWebhookByIdRequest {
    public GetWebhookByIdPathParams pathParams;
    public GetWebhookByIdRequest withPathParams(GetWebhookByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWebhookByIdQueryParams queryParams;
    public GetWebhookByIdRequest withQueryParams(GetWebhookByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWebhookByIdHeaders headers;
    public GetWebhookByIdRequest withHeaders(GetWebhookByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
}