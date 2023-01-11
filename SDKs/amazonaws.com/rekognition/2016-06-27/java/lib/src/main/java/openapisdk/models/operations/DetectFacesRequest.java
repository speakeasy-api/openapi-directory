package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectFacesRequest {
    public DetectFacesHeaders headers;
    public DetectFacesRequest withHeaders(DetectFacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectFacesRequest request;
    public DetectFacesRequest withRequest(openapisdk.models.shared.DetectFacesRequest request) {
        this.request = request;
        return this;
    }
}