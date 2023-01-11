package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagLogGroupRequest {
    public UntagLogGroupHeaders headers;
    public UntagLogGroupRequest withHeaders(UntagLogGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UntagLogGroupRequest request;
    public UntagLogGroupRequest withRequest(openapisdk.models.shared.UntagLogGroupRequest request) {
        this.request = request;
        return this;
    }
}