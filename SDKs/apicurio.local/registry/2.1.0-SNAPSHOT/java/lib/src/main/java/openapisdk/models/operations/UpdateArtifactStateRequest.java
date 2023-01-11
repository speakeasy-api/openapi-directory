package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArtifactStateRequest {
    public UpdateArtifactStatePathParams pathParams;
    public UpdateArtifactStateRequest withPathParams(UpdateArtifactStatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateState request;
    public UpdateArtifactStateRequest withRequest(openapisdk.models.shared.UpdateState request) {
        this.request = request;
        return this;
    }
}