package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEmailChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public UpdateEmailChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}