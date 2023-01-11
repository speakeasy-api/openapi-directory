package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEventStreamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public PutEventStreamPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}