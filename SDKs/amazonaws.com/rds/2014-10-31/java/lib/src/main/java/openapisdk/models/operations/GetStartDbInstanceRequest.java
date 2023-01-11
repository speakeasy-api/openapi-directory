package openapisdk.models.operations;



public class GetStartDbInstanceRequest {
    public GetStartDbInstanceQueryParams queryParams;
    public GetStartDbInstanceRequest withQueryParams(GetStartDbInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetStartDbInstanceHeaders headers;
    public GetStartDbInstanceRequest withHeaders(GetStartDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
}