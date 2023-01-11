package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCreatedArtifactsRequest {
    public ListCreatedArtifactsQueryParams queryParams;
    public ListCreatedArtifactsRequest withQueryParams(ListCreatedArtifactsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCreatedArtifactsHeaders headers;
    public ListCreatedArtifactsRequest withHeaders(ListCreatedArtifactsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCreatedArtifactsRequest request;
    public ListCreatedArtifactsRequest withRequest(openapisdk.models.shared.ListCreatedArtifactsRequest request) {
        this.request = request;
        return this;
    }
}