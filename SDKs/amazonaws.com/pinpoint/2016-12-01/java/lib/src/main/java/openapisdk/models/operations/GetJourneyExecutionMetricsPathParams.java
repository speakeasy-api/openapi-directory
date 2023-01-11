package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJourneyExecutionMetricsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetJourneyExecutionMetricsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=journey-id")
    public String journeyId;
    public GetJourneyExecutionMetricsPathParams withJourneyId(String journeyId) {
        this.journeyId = journeyId;
        return this;
    }
}