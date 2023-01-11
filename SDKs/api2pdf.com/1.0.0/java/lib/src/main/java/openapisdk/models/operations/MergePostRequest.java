package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergePostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MergeRequest request;
    public MergePostRequest withRequest(openapisdk.models.shared.MergeRequest request) {
        this.request = request;
        return this;
    }
}