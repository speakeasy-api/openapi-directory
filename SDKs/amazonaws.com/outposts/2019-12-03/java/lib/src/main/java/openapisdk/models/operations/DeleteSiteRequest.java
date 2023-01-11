package openapisdk.models.operations;



public class DeleteSiteRequest {
    public DeleteSitePathParams pathParams;
    public DeleteSiteRequest withPathParams(DeleteSitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSiteHeaders headers;
    public DeleteSiteRequest withHeaders(DeleteSiteHeaders headers) {
        this.headers = headers;
        return this;
    }
}