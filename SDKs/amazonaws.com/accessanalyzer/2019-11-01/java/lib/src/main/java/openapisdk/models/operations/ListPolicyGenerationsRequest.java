package openapisdk.models.operations;



public class ListPolicyGenerationsRequest {
    public ListPolicyGenerationsQueryParams queryParams;
    public ListPolicyGenerationsRequest withQueryParams(ListPolicyGenerationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPolicyGenerationsHeaders headers;
    public ListPolicyGenerationsRequest withHeaders(ListPolicyGenerationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}