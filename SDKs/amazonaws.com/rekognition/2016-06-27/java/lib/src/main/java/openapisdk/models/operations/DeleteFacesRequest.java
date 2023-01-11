package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFacesRequest {
    public DeleteFacesHeaders headers;
    public DeleteFacesRequest withHeaders(DeleteFacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteFacesRequest request;
    public DeleteFacesRequest withRequest(openapisdk.models.shared.DeleteFacesRequest request) {
        this.request = request;
        return this;
    }
}