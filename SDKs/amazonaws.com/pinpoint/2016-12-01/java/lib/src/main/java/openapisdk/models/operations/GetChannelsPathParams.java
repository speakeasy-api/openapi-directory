package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetChannelsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}