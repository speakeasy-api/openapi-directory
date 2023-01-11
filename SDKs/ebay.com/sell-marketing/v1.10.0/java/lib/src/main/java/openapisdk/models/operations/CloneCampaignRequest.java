package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloneCampaignRequest {
    public CloneCampaignPathParams pathParams;
    public CloneCampaignRequest withPathParams(CloneCampaignPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CloneCampaignRequest request;
    public CloneCampaignRequest withRequest(openapisdk.models.shared.CloneCampaignRequest request) {
        this.request = request;
        return this;
    }
    public CloneCampaignSecurity security;
    public CloneCampaignRequest withSecurity(CloneCampaignSecurity security) {
        this.security = security;
        return this;
    }
}