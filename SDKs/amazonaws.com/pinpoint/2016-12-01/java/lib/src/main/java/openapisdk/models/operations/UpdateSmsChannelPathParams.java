package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSmsChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public UpdateSmsChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}