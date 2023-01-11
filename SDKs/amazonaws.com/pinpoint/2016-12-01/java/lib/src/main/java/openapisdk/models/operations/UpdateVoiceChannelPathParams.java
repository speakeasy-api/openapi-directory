package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVoiceChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public UpdateVoiceChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}