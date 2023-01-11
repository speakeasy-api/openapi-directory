package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSmsChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetSmsChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}