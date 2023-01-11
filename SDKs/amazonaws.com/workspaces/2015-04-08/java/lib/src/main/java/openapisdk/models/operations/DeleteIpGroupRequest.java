package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteIpGroupRequest {
    public DeleteIpGroupHeaders headers;
    public DeleteIpGroupRequest withHeaders(DeleteIpGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteIpGroupRequest request;
    public DeleteIpGroupRequest withRequest(openapisdk.models.shared.DeleteIpGroupRequest request) {
        this.request = request;
        return this;
    }
}