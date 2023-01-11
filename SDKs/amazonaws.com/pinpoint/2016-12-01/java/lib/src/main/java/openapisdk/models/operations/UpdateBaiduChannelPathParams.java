package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBaiduChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public UpdateBaiduChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}