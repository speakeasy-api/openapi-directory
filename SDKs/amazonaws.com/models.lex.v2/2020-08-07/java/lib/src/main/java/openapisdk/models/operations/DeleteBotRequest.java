package openapisdk.models.operations;



public class DeleteBotRequest {
    public DeleteBotPathParams pathParams;
    public DeleteBotRequest withPathParams(DeleteBotPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteBotQueryParams queryParams;
    public DeleteBotRequest withQueryParams(DeleteBotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteBotHeaders headers;
    public DeleteBotRequest withHeaders(DeleteBotHeaders headers) {
        this.headers = headers;
        return this;
    }
}