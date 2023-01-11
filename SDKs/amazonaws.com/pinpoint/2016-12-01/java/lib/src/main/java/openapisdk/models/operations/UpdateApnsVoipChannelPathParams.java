package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApnsVoipChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public UpdateApnsVoipChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}