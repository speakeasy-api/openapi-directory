package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCampaignsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetCampaignsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}