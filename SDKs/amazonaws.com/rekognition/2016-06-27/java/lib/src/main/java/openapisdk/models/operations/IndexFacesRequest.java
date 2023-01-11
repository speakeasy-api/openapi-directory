package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IndexFacesRequest {
    public IndexFacesHeaders headers;
    public IndexFacesRequest withHeaders(IndexFacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IndexFacesRequest request;
    public IndexFacesRequest withRequest(openapisdk.models.shared.IndexFacesRequest request) {
        this.request = request;
        return this;
    }
}