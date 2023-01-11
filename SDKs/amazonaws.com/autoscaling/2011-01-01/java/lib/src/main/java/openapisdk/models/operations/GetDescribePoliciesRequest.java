package openapisdk.models.operations;



public class GetDescribePoliciesRequest {
    public GetDescribePoliciesQueryParams queryParams;
    public GetDescribePoliciesRequest withQueryParams(GetDescribePoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribePoliciesHeaders headers;
    public GetDescribePoliciesRequest withHeaders(GetDescribePoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
}