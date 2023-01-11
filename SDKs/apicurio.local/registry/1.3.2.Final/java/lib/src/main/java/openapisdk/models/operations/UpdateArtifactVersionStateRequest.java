package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArtifactVersionStateRequest {
    public UpdateArtifactVersionStatePathParams pathParams;
    public UpdateArtifactVersionStateRequest withPathParams(UpdateArtifactVersionStatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateState request;
    public UpdateArtifactVersionStateRequest withRequest(openapisdk.models.shared.UpdateState request) {
        this.request = request;
        return this;
    }
}