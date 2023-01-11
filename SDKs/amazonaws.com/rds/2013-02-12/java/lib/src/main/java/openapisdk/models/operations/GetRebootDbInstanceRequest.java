package openapisdk.models.operations;



public class GetRebootDbInstanceRequest {
    public GetRebootDbInstanceQueryParams queryParams;
    public GetRebootDbInstanceRequest withQueryParams(GetRebootDbInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRebootDbInstanceHeaders headers;
    public GetRebootDbInstanceRequest withHeaders(GetRebootDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
}