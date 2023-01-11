package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreviewAgentsRequest {
    public PreviewAgentsQueryParams queryParams;
    public PreviewAgentsRequest withQueryParams(PreviewAgentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PreviewAgentsHeaders headers;
    public PreviewAgentsRequest withHeaders(PreviewAgentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PreviewAgentsRequest request;
    public PreviewAgentsRequest withRequest(openapisdk.models.shared.PreviewAgentsRequest request) {
        this.request = request;
        return this;
    }
}