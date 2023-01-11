package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyReplicationGroupShardConfigurationRequest {
    public PostModifyReplicationGroupShardConfigurationQueryParams queryParams;
    public PostModifyReplicationGroupShardConfigurationRequest withQueryParams(PostModifyReplicationGroupShardConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyReplicationGroupShardConfigurationHeaders headers;
    public PostModifyReplicationGroupShardConfigurationRequest withHeaders(PostModifyReplicationGroupShardConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyReplicationGroupShardConfigurationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}