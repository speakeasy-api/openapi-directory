package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnlockconnectorRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UnlockconnectorRequestBody request;
    public UnlockconnectorRequest withRequest(UnlockconnectorRequestBody request) {
        this.request = request;
        return this;
    }
}