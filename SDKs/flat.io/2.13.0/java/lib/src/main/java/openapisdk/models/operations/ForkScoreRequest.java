package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ForkScoreRequest {
    public ForkScorePathParams pathParams;
    public ForkScoreRequest withPathParams(ForkScorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ForkScoreQueryParams queryParams;
    public ForkScoreRequest withQueryParams(ForkScoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScoreFork request;
    public ForkScoreRequest withRequest(openapisdk.models.shared.ScoreFork request) {
        this.request = request;
        return this;
    }
    public ForkScoreSecurity security;
    public ForkScoreRequest withSecurity(ForkScoreSecurity security) {
        this.security = security;
        return this;
    }
}