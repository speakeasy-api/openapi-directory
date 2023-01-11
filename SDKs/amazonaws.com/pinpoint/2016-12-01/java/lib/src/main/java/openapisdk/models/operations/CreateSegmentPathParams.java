package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSegmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public CreateSegmentPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}