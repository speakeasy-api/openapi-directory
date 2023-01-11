package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateScoreRevisionRequest {
    public CreateScoreRevisionPathParams pathParams;
    public CreateScoreRevisionRequest withPathParams(CreateScoreRevisionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScoreRevisionCreation request;
    public CreateScoreRevisionRequest withRequest(openapisdk.models.shared.ScoreRevisionCreation request) {
        this.request = request;
        return this;
    }
    public CreateScoreRevisionSecurity security;
    public CreateScoreRevisionRequest withSecurity(CreateScoreRevisionSecurity security) {
        this.security = security;
        return this;
    }
}