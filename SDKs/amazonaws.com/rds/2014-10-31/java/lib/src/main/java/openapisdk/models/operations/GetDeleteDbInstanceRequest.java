package openapisdk.models.operations;



public class GetDeleteDbInstanceRequest {
    public GetDeleteDbInstanceQueryParams queryParams;
    public GetDeleteDbInstanceRequest withQueryParams(GetDeleteDbInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDeleteDbInstanceHeaders headers;
    public GetDeleteDbInstanceRequest withHeaders(GetDeleteDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
}