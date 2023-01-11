package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateShardCountRequest {
    public UpdateShardCountHeaders headers;
    public UpdateShardCountRequest withHeaders(UpdateShardCountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateShardCountInput request;
    public UpdateShardCountRequest withRequest(openapisdk.models.shared.UpdateShardCountInput request) {
        this.request = request;
        return this;
    }
}