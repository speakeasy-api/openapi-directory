package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddIpRoutesRequest {
    public AddIpRoutesHeaders headers;
    public AddIpRoutesRequest withHeaders(AddIpRoutesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddIpRoutesRequest request;
    public AddIpRoutesRequest withRequest(openapisdk.models.shared.AddIpRoutesRequest request) {
        this.request = request;
        return this;
    }
}