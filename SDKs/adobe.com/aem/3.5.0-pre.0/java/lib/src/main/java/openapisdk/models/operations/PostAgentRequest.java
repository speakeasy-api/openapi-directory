package openapisdk.models.operations;



public class PostAgentRequest {
    public PostAgentPathParams pathParams;
    public PostAgentRequest withPathParams(PostAgentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostAgentQueryParams queryParams;
    public PostAgentRequest withQueryParams(PostAgentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}