package openapisdk.models.operations;



public class GetDedicatedIpsRequest {
    public GetDedicatedIpsQueryParams queryParams;
    public GetDedicatedIpsRequest withQueryParams(GetDedicatedIpsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDedicatedIpsHeaders headers;
    public GetDedicatedIpsRequest withHeaders(GetDedicatedIpsHeaders headers) {
        this.headers = headers;
        return this;
    }
}