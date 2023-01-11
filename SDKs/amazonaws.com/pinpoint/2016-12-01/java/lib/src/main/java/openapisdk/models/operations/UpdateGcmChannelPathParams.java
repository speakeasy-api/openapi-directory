package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGcmChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public UpdateGcmChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}