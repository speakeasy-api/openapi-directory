package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBaiduChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetBaiduChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}