package openapisdk.models.operations;



public class GetScoreTrackRequest {
    public GetScoreTrackPathParams pathParams;
    public GetScoreTrackRequest withPathParams(GetScoreTrackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetScoreTrackQueryParams queryParams;
    public GetScoreTrackRequest withQueryParams(GetScoreTrackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetScoreTrackSecurity security;
    public GetScoreTrackRequest withSecurity(GetScoreTrackSecurity security) {
        this.security = security;
        return this;
    }
}