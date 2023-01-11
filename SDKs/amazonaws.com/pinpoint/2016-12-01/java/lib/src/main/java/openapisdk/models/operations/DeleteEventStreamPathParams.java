package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEventStreamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public DeleteEventStreamPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}