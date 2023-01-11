package openapisdk.models.operations;



public class GetPromoteReadReplicaDbClusterRequest {
    public GetPromoteReadReplicaDbClusterQueryParams queryParams;
    public GetPromoteReadReplicaDbClusterRequest withQueryParams(GetPromoteReadReplicaDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPromoteReadReplicaDbClusterHeaders headers;
    public GetPromoteReadReplicaDbClusterRequest withHeaders(GetPromoteReadReplicaDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
}