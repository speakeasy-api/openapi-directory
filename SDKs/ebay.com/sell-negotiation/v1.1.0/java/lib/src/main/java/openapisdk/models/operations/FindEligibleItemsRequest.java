package openapisdk.models.operations;



public class FindEligibleItemsRequest {
    public FindEligibleItemsQueryParams queryParams;
    public FindEligibleItemsRequest withQueryParams(FindEligibleItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FindEligibleItemsHeaders headers;
    public FindEligibleItemsRequest withHeaders(FindEligibleItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public FindEligibleItemsSecurity security;
    public FindEligibleItemsRequest withSecurity(FindEligibleItemsSecurity security) {
        this.security = security;
        return this;
    }
}