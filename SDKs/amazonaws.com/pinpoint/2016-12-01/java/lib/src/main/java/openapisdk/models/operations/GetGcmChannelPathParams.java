package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGcmChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetGcmChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}