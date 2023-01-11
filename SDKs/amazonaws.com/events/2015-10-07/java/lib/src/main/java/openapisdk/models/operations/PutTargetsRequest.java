package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsRequest {
    public PutTargetsHeaders headers;
    public PutTargetsRequest withHeaders(PutTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutTargetsRequest request;
    public PutTargetsRequest withRequest(openapisdk.models.shared.PutTargetsRequest request) {
        this.request = request;
        return this;
    }
}