package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApnsVoipSandboxChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public DeleteApnsVoipSandboxChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}