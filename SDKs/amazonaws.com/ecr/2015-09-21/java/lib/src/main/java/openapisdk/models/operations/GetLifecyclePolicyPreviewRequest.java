package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLifecyclePolicyPreviewRequest {
    public GetLifecyclePolicyPreviewQueryParams queryParams;
    public GetLifecyclePolicyPreviewRequest withQueryParams(GetLifecyclePolicyPreviewQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetLifecyclePolicyPreviewHeaders headers;
    public GetLifecyclePolicyPreviewRequest withHeaders(GetLifecyclePolicyPreviewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLifecyclePolicyPreviewRequest request;
    public GetLifecyclePolicyPreviewRequest withRequest(openapisdk.models.shared.GetLifecyclePolicyPreviewRequest request) {
        this.request = request;
        return this;
    }
}