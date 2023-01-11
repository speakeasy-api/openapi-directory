package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditScoreRequest {
    public EditScorePathParams pathParams;
    public EditScoreRequest withPathParams(EditScorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScoreModification request;
    public EditScoreRequest withRequest(openapisdk.models.shared.ScoreModification request) {
        this.request = request;
        return this;
    }
    public EditScoreSecurity security;
    public EditScoreRequest withSecurity(EditScoreSecurity security) {
        this.security = security;
        return this;
    }
}