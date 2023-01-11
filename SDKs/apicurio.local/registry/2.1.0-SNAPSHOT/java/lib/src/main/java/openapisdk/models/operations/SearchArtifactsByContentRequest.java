package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchArtifactsByContentRequest {
    public SearchArtifactsByContentQueryParams queryParams;
    public SearchArtifactsByContentRequest withQueryParams(SearchArtifactsByContentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=*/*")
    public byte[] request;
    public SearchArtifactsByContentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}