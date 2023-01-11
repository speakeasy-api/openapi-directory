package openapisdk.models.operations;



public class GetCreateDbInstanceReadReplicaRequest {
    public GetCreateDbInstanceReadReplicaQueryParams queryParams;
    public GetCreateDbInstanceReadReplicaRequest withQueryParams(GetCreateDbInstanceReadReplicaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCreateDbInstanceReadReplicaHeaders headers;
    public GetCreateDbInstanceReadReplicaRequest withHeaders(GetCreateDbInstanceReadReplicaHeaders headers) {
        this.headers = headers;
        return this;
    }
}