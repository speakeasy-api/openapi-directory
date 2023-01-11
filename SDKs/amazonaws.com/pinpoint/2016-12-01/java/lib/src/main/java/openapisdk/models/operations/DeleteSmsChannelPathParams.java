package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSmsChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public DeleteSmsChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}