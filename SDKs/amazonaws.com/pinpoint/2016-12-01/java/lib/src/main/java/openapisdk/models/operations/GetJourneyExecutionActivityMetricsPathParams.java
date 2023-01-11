package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJourneyExecutionActivityMetricsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetJourneyExecutionActivityMetricsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=journey-activity-id")
    public String journeyActivityId;
    public GetJourneyExecutionActivityMetricsPathParams withJourneyActivityId(String journeyActivityId) {
        this.journeyActivityId = journeyActivityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=journey-id")
    public String journeyId;
    public GetJourneyExecutionActivityMetricsPathParams withJourneyId(String journeyId) {
        this.journeyId = journeyId;
        return this;
    }
}