package openapisdk.models.operations;



public class GetVpcLinksRequest {
    public GetVpcLinksQueryParams queryParams;
    public GetVpcLinksRequest withQueryParams(GetVpcLinksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVpcLinksHeaders headers;
    public GetVpcLinksRequest withHeaders(GetVpcLinksHeaders headers) {
        this.headers = headers;
        return this;
    }
}