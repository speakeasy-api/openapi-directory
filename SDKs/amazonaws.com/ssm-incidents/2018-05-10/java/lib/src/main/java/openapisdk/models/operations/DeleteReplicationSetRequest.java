package openapisdk.models.operations;



public class DeleteReplicationSetRequest {
    public DeleteReplicationSetQueryParams queryParams;
    public DeleteReplicationSetRequest withQueryParams(DeleteReplicationSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteReplicationSetHeaders headers;
    public DeleteReplicationSetRequest withHeaders(DeleteReplicationSetHeaders headers) {
        this.headers = headers;
        return this;
    }
}