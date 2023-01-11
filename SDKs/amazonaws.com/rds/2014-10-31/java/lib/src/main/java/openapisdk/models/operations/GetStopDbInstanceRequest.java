package openapisdk.models.operations;



public class GetStopDbInstanceRequest {
    public GetStopDbInstanceQueryParams queryParams;
    public GetStopDbInstanceRequest withQueryParams(GetStopDbInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetStopDbInstanceHeaders headers;
    public GetStopDbInstanceRequest withHeaders(GetStopDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
}