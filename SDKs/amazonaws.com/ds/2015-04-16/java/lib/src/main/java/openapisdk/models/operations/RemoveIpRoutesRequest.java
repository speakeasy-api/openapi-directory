package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveIpRoutesRequest {
    public RemoveIpRoutesHeaders headers;
    public RemoveIpRoutesRequest withHeaders(RemoveIpRoutesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveIpRoutesRequest request;
    public RemoveIpRoutesRequest withRequest(openapisdk.models.shared.RemoveIpRoutesRequest request) {
        this.request = request;
        return this;
    }
}