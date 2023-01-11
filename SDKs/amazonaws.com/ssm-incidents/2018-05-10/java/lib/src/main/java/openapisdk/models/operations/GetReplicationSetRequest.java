package openapisdk.models.operations;



public class GetReplicationSetRequest {
    public GetReplicationSetQueryParams queryParams;
    public GetReplicationSetRequest withQueryParams(GetReplicationSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetReplicationSetHeaders headers;
    public GetReplicationSetRequest withHeaders(GetReplicationSetHeaders headers) {
        this.headers = headers;
        return this;
    }
}