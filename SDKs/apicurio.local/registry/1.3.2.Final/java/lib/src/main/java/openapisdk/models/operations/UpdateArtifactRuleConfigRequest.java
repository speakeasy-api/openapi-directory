package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArtifactRuleConfigRequest {
    public UpdateArtifactRuleConfigPathParams pathParams;
    public UpdateArtifactRuleConfigRequest withPathParams(UpdateArtifactRuleConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Rule request;
    public UpdateArtifactRuleConfigRequest withRequest(openapisdk.models.shared.Rule request) {
        this.request = request;
        return this;
    }
}