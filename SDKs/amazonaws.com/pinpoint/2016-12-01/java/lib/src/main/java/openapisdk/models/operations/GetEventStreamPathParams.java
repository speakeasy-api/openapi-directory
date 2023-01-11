package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventStreamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetEventStreamPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}