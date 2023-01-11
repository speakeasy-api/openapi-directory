package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddScoreTrackRequest {
    public AddScoreTrackPathParams pathParams;
    public AddScoreTrackRequest withPathParams(AddScoreTrackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScoreTrackCreation request;
    public AddScoreTrackRequest withRequest(openapisdk.models.shared.ScoreTrackCreation request) {
        this.request = request;
        return this;
    }
    public AddScoreTrackSecurity security;
    public AddScoreTrackRequest withSecurity(AddScoreTrackSecurity security) {
        this.security = security;
        return this;
    }
}