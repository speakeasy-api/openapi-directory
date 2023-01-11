package openapisdk.models.operations;



public class GetPromoteReadReplicaRequest {
    public GetPromoteReadReplicaQueryParams queryParams;
    public GetPromoteReadReplicaRequest withQueryParams(GetPromoteReadReplicaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPromoteReadReplicaHeaders headers;
    public GetPromoteReadReplicaRequest withHeaders(GetPromoteReadReplicaHeaders headers) {
        this.headers = headers;
        return this;
    }
}