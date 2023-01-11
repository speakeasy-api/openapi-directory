package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobBookmarkRequest {
    public GetJobBookmarkHeaders headers;
    public GetJobBookmarkRequest withHeaders(GetJobBookmarkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetJobBookmarkRequest request;
    public GetJobBookmarkRequest withRequest(openapisdk.models.shared.GetJobBookmarkRequest request) {
        this.request = request;
        return this;
    }
}