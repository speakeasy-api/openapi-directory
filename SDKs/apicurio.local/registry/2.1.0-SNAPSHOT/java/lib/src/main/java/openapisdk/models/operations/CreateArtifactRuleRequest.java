package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArtifactRuleRequest {
    public CreateArtifactRulePathParams pathParams;
    public CreateArtifactRuleRequest withPathParams(CreateArtifactRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Rule request;
    public CreateArtifactRuleRequest withRequest(openapisdk.models.shared.Rule request) {
        this.request = request;
        return this;
    }
}