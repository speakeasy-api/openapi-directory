package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFindingsRequest {
    public GetFindingsHeaders headers;
    public GetFindingsRequest withHeaders(GetFindingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetFindingsRequestBody request;
    public GetFindingsRequest withRequest(GetFindingsRequestBody request) {
        this.request = request;
        return this;
    }
}