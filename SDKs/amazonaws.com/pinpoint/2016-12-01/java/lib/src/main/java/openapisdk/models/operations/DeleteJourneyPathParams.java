package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJourneyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public DeleteJourneyPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=journey-id")
    public String journeyId;
    public DeleteJourneyPathParams withJourneyId(String journeyId) {
        this.journeyId = journeyId;
        return this;
    }
}