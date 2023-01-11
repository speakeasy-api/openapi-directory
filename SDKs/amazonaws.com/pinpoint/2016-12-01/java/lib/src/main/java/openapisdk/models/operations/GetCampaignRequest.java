package openapisdk.models.operations;



public class GetCampaignRequest {
    public GetCampaignPathParams pathParams;
    public GetCampaignRequest withPathParams(GetCampaignPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCampaignHeaders headers;
    public GetCampaignRequest withHeaders(GetCampaignHeaders headers) {
        this.headers = headers;
        return this;
    }
}