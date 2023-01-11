package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBaiduChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public DeleteBaiduChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}