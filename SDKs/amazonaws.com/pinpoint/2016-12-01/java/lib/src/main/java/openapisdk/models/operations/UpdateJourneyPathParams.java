package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateJourneyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public UpdateJourneyPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=journey-id")
    public String journeyId;
    public UpdateJourneyPathParams withJourneyId(String journeyId) {
        this.journeyId = journeyId;
        return this;
    }
}