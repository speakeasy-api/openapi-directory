package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStopDbInstanceAutomatedBackupsReplicationRequest {
    public PostStopDbInstanceAutomatedBackupsReplicationQueryParams queryParams;
    public PostStopDbInstanceAutomatedBackupsReplicationRequest withQueryParams(PostStopDbInstanceAutomatedBackupsReplicationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStopDbInstanceAutomatedBackupsReplicationHeaders headers;
    public PostStopDbInstanceAutomatedBackupsReplicationRequest withHeaders(PostStopDbInstanceAutomatedBackupsReplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStopDbInstanceAutomatedBackupsReplicationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}