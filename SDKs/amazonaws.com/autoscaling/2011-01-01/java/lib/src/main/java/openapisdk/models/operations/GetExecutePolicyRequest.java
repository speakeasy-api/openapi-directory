package openapisdk.models.operations;



public class GetExecutePolicyRequest {
    public GetExecutePolicyQueryParams queryParams;
    public GetExecutePolicyRequest withQueryParams(GetExecutePolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetExecutePolicyHeaders headers;
    public GetExecutePolicyRequest withHeaders(GetExecutePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}