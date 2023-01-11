package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceLfTagsRequest {
    public GetResourceLfTagsHeaders headers;
    public GetResourceLfTagsRequest withHeaders(GetResourceLfTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResourceLfTagsRequest request;
    public GetResourceLfTagsRequest withRequest(openapisdk.models.shared.GetResourceLfTagsRequest request) {
        this.request = request;
        return this;
    }
}