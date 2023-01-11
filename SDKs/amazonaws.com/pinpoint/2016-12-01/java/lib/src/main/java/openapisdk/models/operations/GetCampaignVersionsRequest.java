package openapisdk.models.operations;



public class GetCampaignVersionsRequest {
    public GetCampaignVersionsPathParams pathParams;
    public GetCampaignVersionsRequest withPathParams(GetCampaignVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCampaignVersionsQueryParams queryParams;
    public GetCampaignVersionsRequest withQueryParams(GetCampaignVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCampaignVersionsHeaders headers;
    public GetCampaignVersionsRequest withHeaders(GetCampaignVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}