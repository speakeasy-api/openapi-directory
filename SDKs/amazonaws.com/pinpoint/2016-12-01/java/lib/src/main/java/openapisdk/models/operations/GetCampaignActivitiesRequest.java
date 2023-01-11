package openapisdk.models.operations;



public class GetCampaignActivitiesRequest {
    public GetCampaignActivitiesPathParams pathParams;
    public GetCampaignActivitiesRequest withPathParams(GetCampaignActivitiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCampaignActivitiesQueryParams queryParams;
    public GetCampaignActivitiesRequest withQueryParams(GetCampaignActivitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCampaignActivitiesHeaders headers;
    public GetCampaignActivitiesRequest withHeaders(GetCampaignActivitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
}