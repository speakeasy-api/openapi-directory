package openapisdk.models.operations;



public class DeleteCampaignRequest {
    public DeleteCampaignPathParams pathParams;
    public DeleteCampaignRequest withPathParams(DeleteCampaignPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCampaignHeaders headers;
    public DeleteCampaignRequest withHeaders(DeleteCampaignHeaders headers) {
        this.headers = headers;
        return this;
    }
}