package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApnsChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public UpdateApnsChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}