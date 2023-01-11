package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveTargetsRequest {
    public RemoveTargetsHeaders headers;
    public RemoveTargetsRequest withHeaders(RemoveTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveTargetsRequest request;
    public RemoveTargetsRequest withRequest(openapisdk.models.shared.RemoveTargetsRequest request) {
        this.request = request;
        return this;
    }
}