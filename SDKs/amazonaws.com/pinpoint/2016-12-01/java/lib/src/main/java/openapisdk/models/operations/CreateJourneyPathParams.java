package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateJourneyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public CreateJourneyPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}