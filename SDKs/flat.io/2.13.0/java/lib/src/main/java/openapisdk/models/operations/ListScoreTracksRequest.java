package openapisdk.models.operations;



public class ListScoreTracksRequest {
    public ListScoreTracksPathParams pathParams;
    public ListScoreTracksRequest withPathParams(ListScoreTracksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListScoreTracksQueryParams queryParams;
    public ListScoreTracksRequest withQueryParams(ListScoreTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListScoreTracksSecurity security;
    public ListScoreTracksRequest withSecurity(ListScoreTracksSecurity security) {
        this.security = security;
        return this;
    }
}