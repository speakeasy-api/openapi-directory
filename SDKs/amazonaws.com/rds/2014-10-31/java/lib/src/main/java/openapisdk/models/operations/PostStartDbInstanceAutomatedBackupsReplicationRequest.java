package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartDbInstanceAutomatedBackupsReplicationRequest {
    public PostStartDbInstanceAutomatedBackupsReplicationQueryParams queryParams;
    public PostStartDbInstanceAutomatedBackupsReplicationRequest withQueryParams(PostStartDbInstanceAutomatedBackupsReplicationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStartDbInstanceAutomatedBackupsReplicationHeaders headers;
    public PostStartDbInstanceAutomatedBackupsReplicationRequest withHeaders(PostStartDbInstanceAutomatedBackupsReplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStartDbInstanceAutomatedBackupsReplicationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}