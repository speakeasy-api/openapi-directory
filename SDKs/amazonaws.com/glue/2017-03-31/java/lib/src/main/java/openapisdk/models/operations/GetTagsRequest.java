package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsRequest {
    public GetTagsHeaders headers;
    public GetTagsRequest withHeaders(GetTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTagsRequest request;
    public GetTagsRequest withRequest(openapisdk.models.shared.GetTagsRequest request) {
        this.request = request;
        return this;
    }
}