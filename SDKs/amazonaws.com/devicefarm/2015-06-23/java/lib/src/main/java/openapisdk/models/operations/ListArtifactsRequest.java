package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListArtifactsRequest {
    public ListArtifactsQueryParams queryParams;
    public ListArtifactsRequest withQueryParams(ListArtifactsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListArtifactsHeaders headers;
    public ListArtifactsRequest withHeaders(ListArtifactsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListArtifactsRequest request;
    public ListArtifactsRequest withRequest(openapisdk.models.shared.ListArtifactsRequest request) {
        this.request = request;
        return this;
    }
}