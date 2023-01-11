package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCampaignPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public CreateCampaignPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}