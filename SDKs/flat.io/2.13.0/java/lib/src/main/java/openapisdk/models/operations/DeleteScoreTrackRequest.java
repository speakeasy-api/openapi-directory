package openapisdk.models.operations;



public class DeleteScoreTrackRequest {
    public DeleteScoreTrackPathParams pathParams;
    public DeleteScoreTrackRequest withPathParams(DeleteScoreTrackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteScoreTrackSecurity security;
    public DeleteScoreTrackRequest withSecurity(DeleteScoreTrackSecurity security) {
        this.security = security;
        return this;
    }
}