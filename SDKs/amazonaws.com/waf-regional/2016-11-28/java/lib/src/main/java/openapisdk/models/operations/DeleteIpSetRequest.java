package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteIpSetRequest {
    public DeleteIpSetHeaders headers;
    public DeleteIpSetRequest withHeaders(DeleteIpSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteIpSetRequest request;
    public DeleteIpSetRequest withRequest(openapisdk.models.shared.DeleteIpSetRequest request) {
        this.request = request;
        return this;
    }
}