package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVoiceChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public DeleteVoiceChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}