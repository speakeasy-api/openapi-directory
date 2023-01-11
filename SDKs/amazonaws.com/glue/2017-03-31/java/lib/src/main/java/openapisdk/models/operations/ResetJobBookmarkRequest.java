package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetJobBookmarkRequest {
    public ResetJobBookmarkHeaders headers;
    public ResetJobBookmarkRequest withHeaders(ResetJobBookmarkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResetJobBookmarkRequest request;
    public ResetJobBookmarkRequest withRequest(openapisdk.models.shared.ResetJobBookmarkRequest request) {
        this.request = request;
        return this;
    }
}