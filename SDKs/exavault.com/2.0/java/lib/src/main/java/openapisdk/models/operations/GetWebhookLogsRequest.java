package openapisdk.models.operations;



public class GetWebhookLogsRequest {
    public GetWebhookLogsQueryParams queryParams;
    public GetWebhookLogsRequest withQueryParams(GetWebhookLogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWebhookLogsHeaders headers;
    public GetWebhookLogsRequest withHeaders(GetWebhookLogsHeaders headers) {
        this.headers = headers;
        return this;
    }
}