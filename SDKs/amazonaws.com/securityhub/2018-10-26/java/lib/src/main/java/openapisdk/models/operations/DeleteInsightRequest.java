package openapisdk.models.operations;



public class DeleteInsightRequest {
    public DeleteInsightPathParams pathParams;
    public DeleteInsightRequest withPathParams(DeleteInsightPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteInsightHeaders headers;
    public DeleteInsightRequest withHeaders(DeleteInsightHeaders headers) {
        this.headers = headers;
        return this;
    }
}