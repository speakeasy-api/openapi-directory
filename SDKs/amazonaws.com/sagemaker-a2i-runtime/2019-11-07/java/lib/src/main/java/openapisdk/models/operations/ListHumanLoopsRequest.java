package openapisdk.models.operations;



public class ListHumanLoopsRequest {
    public ListHumanLoopsQueryParams queryParams;
    public ListHumanLoopsRequest withQueryParams(ListHumanLoopsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListHumanLoopsHeaders headers;
    public ListHumanLoopsRequest withHeaders(ListHumanLoopsHeaders headers) {
        this.headers = headers;
        return this;
    }
}