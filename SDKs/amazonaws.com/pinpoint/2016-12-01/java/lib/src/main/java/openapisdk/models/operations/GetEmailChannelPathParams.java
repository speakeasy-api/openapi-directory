package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmailChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetEmailChannelPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}