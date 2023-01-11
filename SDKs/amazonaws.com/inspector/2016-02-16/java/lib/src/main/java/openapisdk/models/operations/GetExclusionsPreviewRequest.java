package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExclusionsPreviewRequest {
    public GetExclusionsPreviewQueryParams queryParams;
    public GetExclusionsPreviewRequest withQueryParams(GetExclusionsPreviewQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetExclusionsPreviewHeaders headers;
    public GetExclusionsPreviewRequest withHeaders(GetExclusionsPreviewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetExclusionsPreviewRequest request;
    public GetExclusionsPreviewRequest withRequest(openapisdk.models.shared.GetExclusionsPreviewRequest request) {
        this.request = request;
        return this;
    }
}