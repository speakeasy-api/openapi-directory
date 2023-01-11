package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompareFacesRequest {
    public CompareFacesHeaders headers;
    public CompareFacesRequest withHeaders(CompareFacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompareFacesRequest request;
    public CompareFacesRequest withRequest(openapisdk.models.shared.CompareFacesRequest request) {
        this.request = request;
        return this;
    }
}