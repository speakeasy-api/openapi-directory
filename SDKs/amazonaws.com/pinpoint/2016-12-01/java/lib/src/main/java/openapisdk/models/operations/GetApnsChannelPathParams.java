package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApnsChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetApnsChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}