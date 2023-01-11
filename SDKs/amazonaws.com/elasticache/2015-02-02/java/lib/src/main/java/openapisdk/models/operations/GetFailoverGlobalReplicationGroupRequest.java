package openapisdk.models.operations;



public class GetFailoverGlobalReplicationGroupRequest {
    public GetFailoverGlobalReplicationGroupQueryParams queryParams;
    public GetFailoverGlobalReplicationGroupRequest withQueryParams(GetFailoverGlobalReplicationGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFailoverGlobalReplicationGroupHeaders headers;
    public GetFailoverGlobalReplicationGroupRequest withHeaders(GetFailoverGlobalReplicationGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
}