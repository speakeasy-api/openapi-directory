package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEventsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public PutEventsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}