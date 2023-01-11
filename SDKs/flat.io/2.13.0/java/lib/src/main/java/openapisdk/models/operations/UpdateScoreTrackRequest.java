package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateScoreTrackRequest {
    public UpdateScoreTrackPathParams pathParams;
    public UpdateScoreTrackRequest withPathParams(UpdateScoreTrackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScoreTrackUpdate request;
    public UpdateScoreTrackRequest withRequest(openapisdk.models.shared.ScoreTrackUpdate request) {
        this.request = request;
        return this;
    }
    public UpdateScoreTrackSecurity security;
    public UpdateScoreTrackRequest withSecurity(UpdateScoreTrackSecurity security) {
        this.security = security;
        return this;
    }
}