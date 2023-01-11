package openapisdk.models.operations;



public class GetModifyDbInstanceRequest {
    public GetModifyDbInstanceQueryParams queryParams;
    public GetModifyDbInstanceRequest withQueryParams(GetModifyDbInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetModifyDbInstanceHeaders headers;
    public GetModifyDbInstanceRequest withHeaders(GetModifyDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
}