package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateScoreRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScoreCreation request;
    public CreateScoreRequest withRequest(openapisdk.models.shared.ScoreCreation request) {
        this.request = request;
        return this;
    }
    public CreateScoreSecurity security;
    public CreateScoreRequest withSecurity(CreateScoreSecurity security) {
        this.security = security;
        return this;
    }
}