package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdmChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetAdmChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}