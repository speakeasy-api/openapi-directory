package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateJourneyStatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public UpdateJourneyStatePathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=journey-id")
    public String journeyId;
    public UpdateJourneyStatePathParams withJourneyId(String journeyId) {
        this.journeyId = journeyId;
        return this;
    }
}