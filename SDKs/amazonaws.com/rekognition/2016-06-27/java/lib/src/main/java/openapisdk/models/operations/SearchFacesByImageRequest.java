package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchFacesByImageRequest {
    public SearchFacesByImageHeaders headers;
    public SearchFacesByImageRequest withHeaders(SearchFacesByImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchFacesByImageRequest request;
    public SearchFacesByImageRequest withRequest(openapisdk.models.shared.SearchFacesByImageRequest request) {
        this.request = request;
        return this;
    }
}