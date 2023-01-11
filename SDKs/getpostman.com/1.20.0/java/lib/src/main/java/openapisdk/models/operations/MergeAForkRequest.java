package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergeAForkRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MergeAForkRequestBody request;
    public MergeAForkRequest withRequest(MergeAForkRequestBody request) {
        this.request = request;
        return this;
    }
}