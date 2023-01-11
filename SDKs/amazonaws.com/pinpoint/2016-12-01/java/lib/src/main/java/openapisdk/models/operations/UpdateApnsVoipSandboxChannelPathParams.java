package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApnsVoipSandboxChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public UpdateApnsVoipSandboxChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}