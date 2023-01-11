package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTestGridSessionArtifactsRequest {
    public ListTestGridSessionArtifactsQueryParams queryParams;
    public ListTestGridSessionArtifactsRequest withQueryParams(ListTestGridSessionArtifactsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTestGridSessionArtifactsHeaders headers;
    public ListTestGridSessionArtifactsRequest withHeaders(ListTestGridSessionArtifactsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTestGridSessionArtifactsRequest request;
    public ListTestGridSessionArtifactsRequest withRequest(openapisdk.models.shared.ListTestGridSessionArtifactsRequest request) {
        this.request = request;
        return this;
    }
}