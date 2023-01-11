package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContentModerationRequest {
    public GetContentModerationQueryParams queryParams;
    public GetContentModerationRequest withQueryParams(GetContentModerationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetContentModerationHeaders headers;
    public GetContentModerationRequest withHeaders(GetContentModerationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetContentModerationRequest request;
    public GetContentModerationRequest withRequest(openapisdk.models.shared.GetContentModerationRequest request) {
        this.request = request;
        return this;
    }
}