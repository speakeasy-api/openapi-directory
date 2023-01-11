package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApnsVoipChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public DeleteApnsVoipChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}